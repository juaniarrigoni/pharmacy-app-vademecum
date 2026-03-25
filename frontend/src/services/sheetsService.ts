import { normalizeHeader } from 'utils/normalizeHeader';
import { path, spreadsheetIds } from 'assets/constants/contact';
import type { CategoryData, ProductData } from 'assets/types';

// Mapa de header normalizado → campo de ProductData
const COLUMN_MAP: Partial<Record<string, keyof ProductData>> = {
  'nombre':                   'nombre',
  'presentacion':             'presentacion',
  'formula':                  'formula',
  'descripcion del producto': 'descripcion',
  'modo de uso':              'modoDeUso',
};

interface GvizCell {
  v: string | null;
}

interface GvizRow {
  c: Array<GvizCell | null>;
}

interface GvizTable {
  cols: Array<{ label: string }>;
  rows: Array<GvizRow>;
}

interface GvizResponse {
  table?: GvizTable;
  status?: string;
}

// Extrae el JSON de la respuesta JSONP de gviz (más robusto que substr fijo)
function parseGvizText(text: string): GvizResponse {
  const start = text.indexOf('{');
  const end   = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('[Sheets] Respuesta gviz inesperada');
  return JSON.parse(text.slice(start, end + 1)) as GvizResponse;
}

// Construye un mapa { campo: índiceDeColumna } a partir de un array de labels
function buildColIndexMap(
  labels: Array<string>
): Partial<Record<keyof ProductData, number>> {
  const map: Partial<Record<keyof ProductData, number>> = {};

  labels.forEach((label, index) => {
    const normalized = normalizeHeader(label);
    const field = COLUMN_MAP[normalized];
    if (field !== undefined) {
      map[field] = index;
    }
  });

  return map;
}

// Parsea una fila usando el mapa de columnas
function parseRow(
  cells: Array<GvizCell | null>,
  colMap: Partial<Record<keyof ProductData, number>>
): ProductData {
  const get = (field: keyof ProductData): string => {
    const index = colMap[field];
    if (index === undefined) return '';
    return cells[index]?.v ?? '';
  };

  const nombre = get('nombre');

  return {
    id:           nombre.toLowerCase().replace(/ /g, '-'),
    nombre,
    presentacion: get('presentacion'),
    formula:      get('formula'),
    descripcion:  get('descripcion'),
    modoDeUso:    get('modoDeUso'),
    precio:       '',
  };
}

// Detecta si gviz auto-detectó los headers (cols[i].label tiene nombres reales)
// o si los headers están en rows[0]. Devuelve { colMap, dataRows }.
function resolveHeaders(
  table: GvizTable
): { colMap: Partial<Record<keyof ProductData, number>>; dataRows: Array<GvizRow> } {
  const colLabels = (table.cols ?? []).map((col) => col.label);
  const colMapFromCols = buildColIndexMap(colLabels);

  // Si al menos un campo conocido matchea en cols[i].label, gviz detectó headers
  if (Object.keys(colMapFromCols).length > 0) {
    return { colMap: colMapFromCols, dataRows: table.rows ?? [] };
  }

  // Caso contrario: intentar usar rows[0] como fila de headers
  const rows = table.rows ?? [];
  if (rows.length === 0) return { colMap: {}, dataRows: [] };

  const headerLabels = rows[0].c.map((cell) => cell?.v ?? '');
  const colMapFromRow = buildColIndexMap(headerLabels);

  return { colMap: colMapFromRow, dataRows: rows.slice(1) };
}

// Obtiene y parsea los productos de una hoja específica.
// Devuelve productos vacíos si la hoja no existe o falla (nunca tira).
async function fetchSheetProducts(baseUrl: string, sheetName: string): Promise<CategoryData> {
  try {
    const url = `${baseUrl}&sheet=${encodeURIComponent(sheetName)}`;
    const text = await fetch(url).then((r) => r.text());
    const json = parseGvizText(text);

    if (!json.table) return { name: sheetName, products: [] };

    const { colMap, dataRows } = resolveHeaders(json.table);

    const products: Array<ProductData> = dataRows
      .map((row: GvizRow) => parseRow(row.c, colMap))
      .filter((p: ProductData) => Boolean(p.nombre));

    return { name: sheetName, products };
  } catch {
    return { name: sheetName, products: [] };
  }
}

/**
 * Obtiene todas las categorías del vademécum (lee la hoja índice primero).
 */
export async function fetchAllCategories(): Promise<Array<CategoryData>> {
  const baseUrl = `${path}/${spreadsheetIds.vademecum}/gviz/tq?tqx=out:json`;

  const indexText = await fetch(baseUrl).then((r) => r.text());
  const indexJson = parseGvizText(indexText);

  const sheetNames: Array<string> = (indexJson.table?.rows ?? [])
    .map((row: GvizRow) => row.c[0]?.v)
    .filter(Boolean) as Array<string>;

  const categories = await Promise.all(
    sheetNames.map((name) => fetchSheetProducts(baseUrl, name))
  );

  // Descartar categorías vacías (e.g. hoja índice sin datos de fórmulas)
  return categories.filter((c) => c.products.length > 0);
}

/**
 * Obtiene solo las categorías indicadas (para ProductSection por sección).
 */
export async function fetchCategories(categoryNames: Array<string>): Promise<Array<CategoryData>> {
  const baseUrl = `${path}/${spreadsheetIds.vademecum}/gviz/tq?tqx=out:json`;
  return Promise.all(categoryNames.map((name) => fetchSheetProducts(baseUrl, name)));
}
