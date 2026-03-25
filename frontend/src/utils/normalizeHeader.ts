/**
 * Normaliza un header de Google Sheets para comparación insensible a
 * mayúsculas, tildes y espacios extras.
 *
 * Ejemplo: "Descripción del Producto" → "descripcion del producto"
 */
export const normalizeHeader = (h: string): string =>
  h
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036F]/g, '')
    .trim();
