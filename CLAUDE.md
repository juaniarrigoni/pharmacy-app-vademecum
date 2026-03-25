# CLAUDE.md — Farmacéuticos Asociados Vademécum

## Estructura del repo

```
pharmacy-app/
├── frontend/          ← React 17 + TypeScript + Redux + Styled Components
├── backend/           ← Node.js/Express proxy para Claude API
├── .gitignore
└── CLAUDE.md
```

## Stack

- **Frontend**: React 17, TypeScript, Redux Toolkit, Styled Components, React Router v6, CRA
- **Backend**: Node.js/Express, TypeScript, proxy hacia Anthropic API
- **Datos**: Google Sheets (gviz API, read-only)
- **DB/Auth**: Supabase cloud (PostgreSQL + Auth) — configurado desde el dashboard web
- **Deploy**: Dokploy en VPS Hostinger
- **IA**: Claude (claude-sonnet-4-6) — solo desde /backend

## URLs clave

- Producción: `https://farmaceuticosasociados.com`
- API backend: `https://api.farmaceuticosasociados.com`
- Google Sheet vademécum: `https://docs.google.com/spreadsheets/d/1t-IbQFLlWPNsdF1DNIqVuP5vSaGHBwCFtvS0Tz9ZnDM`
- Google Sheet activos: `https://docs.google.com/spreadsheets/d/1S0mXgKbdX8EPRkXEf7PKx8W63AoHTG5boDY-Ii2ke7c`
- Supabase project ID: `xodqdrqnctajihsafkfg` (región: aws | sa-east-1)

## Variables de entorno

### frontend/.env
```
REACT_APP_SUPABASE_URL=https://xodqdrqnctajihsafkfg.supabase.co
REACT_APP_SUPABASE_ANON_KEY=eyJ...
REACT_APP_API_URL=https://api.farmaceuticosasociados.com
REACT_APP_EMAILJS_TEMPLATE=...
REACT_APP_EMAILJS_USER=...
```

### backend/.env
```
ANTHROPIC_API_KEY=sk-ant-...
FRONTEND_URL=https://farmaceuticosasociados.com
PORT=4000
```

## Google Sheets — estructura

Hoja índice (sheet por defecto): columna A = nombre de categoría, fila 1 = header "CATEGORIAS".

Hojas de producto (una por categoría):
| Header en sheet          | Campo en modelo |
|--------------------------|-----------------|
| Nombre                   | nombre          |
| Presentacion             | presentacion    |
| Formula                  | formula         |
| Descripcion del producto | descripcion     |
| Modo de uso              | modoDeUso       |

Categorías actuales: Vitaminas y Minerales · Fórmulas Funcionales · Corporales · Faciales · Fórmulas Específicas · SmartFood · Suplementos POWERFARM

**IMPORTANTE**: La app NO modifica el sheet. Se adapta a él. No cambiar el orden de columnas.

## Parser gviz — comportamiento crítico

El endpoint gviz (`/gviz/tq?tqx=out:json`) puede devolver headers de dos formas:
1. En `cols[i].label` (cuando gviz detecta headers automáticamente — hojas con datos mixtos)
2. En `rows[0]` (cuando todas las filas son texto — gviz no distingue header de datos)

`frontend/src/services/sheetsService.ts` → función `resolveHeaders()` maneja ambos casos.
Si `cols[i].label` tiene al menos un campo reconocido → usar cols. Si no → usar `rows[0]` como headers y `rows.slice(1)` como datos.

## Arquitectura frontend

```
src/
├── assets/
│   ├── constants/
│   │   ├── contact.tsx     ← URLs, teléfonos, spreadsheetIds
│   │   ├── sections.tsx    ← SECTIONS config (qué secciones mostrar en landing)
│   │   ├── styles.tsx      ← re-exporta desde styles/theme (legacy compat)
│   │   └── colors.tsx      ← re-exporta COLORS desde styles/theme (legacy compat)
│   ├── store/index.tsx     ← Redux store
│   └── types/index.tsx     ← ProductData, CategoryData, etc.
├── styles/
│   └── theme.ts            ← ÚNICA fuente de verdad para tokens de diseño
├── utils/
│   └── normalizeHeader.ts  ← lowercase + quitar tildes + trim
├── services/
│   ├── sheetsService.ts    ← fetchAllCategories(), fetchCategories()
│   └── chatService.ts      ← sendChatMessage() → POST /api/claude/chat
├── constants/
│   └── chatPrompts.ts      ← BASE_SYSTEM_PROMPT, buildFormulaSystemPrompt()
└── components/
    ├── App.tsx             ← Router + ChatBot global
    ├── layouts/
    │   ├── ProductModal/   ← Modal de detalle de fórmula (tabs: Fórmula / Descripción / Modo de Uso)
    │   ├── ChatBot/        ← Botón flotante + panel de chat con Claude
    │   └── Cart/           ← Carrito (comparte fórmulas por WhatsApp)
    └── pages/
        └── Landing/
            ├── index.tsx   ← Itera SECTIONS → ProductSection
            └── components/
                ├── ProductSection/  ← Sección con categorías + buscador
                ├── Vademecum/       ← Vista completa del vademécum
                ├── Contact/         ← Formulario EmailJS
                └── Activos/         ← Lee activos desde otro spreadsheet
```

## Tokens de diseño (theme.ts)

```
COLORS.OFF_WHITE  = #F3EFE6  (fondo principal)
COLORS.BEIGE      = #BDAF9E
COLORS.SAGE       = #9D977B  (primary / botones)
COLORS.DARK_BROWN = #3E3529  (texto)
COLORS.BROWN      = #7C6A55
FONT_FAMILY.PRIMARY = 'Newsreader', serif
FONT_FAMILY.BODY    = 'Rethink Sans', sans-serif
```

NUNCA hardcodear colores hex en styled components. Siempre importar de `styles/theme`.

## ESLint — reglas estrictas a respetar

- `@typescript-eslint/naming-convention`: camelCase obligatorio. UPPER_CASE solo en theme.ts (tiene eslint-disable al tope).
- `unicorn/prevent-abbreviations`: sin `e`, `msg`, `i`, `idx`, `res`. Usar nombres completos.
- `@typescript-eslint/array-type`: usar `Array<T>` en vez de `T[]`.
- `no-console`: prohibido. Ni console.log ni console.error.
- `react/no-array-index-key`: no usar index como key. Si es inevitable, `// eslint-disable-next-line` con justificación.
- `unicorn/escape-case`: `\u036F` en mayúsculas (en normalizeHeader.ts).

## Orden de imports (regla del proyecto)

```typescript
// 1. Dependencias externas (react, react-redux, etc.)
// 2. Componentes internos
// 3. Styled components
// 4. Assets externos (imágenes, etc.)
// 5. Tipos
```

## Estado del roadmap

| Fase | Estado | Descripción |
|------|--------|-------------|
| FASE 0  | ✅ Done | Firebase eliminado, monorepo frontend/ + backend/ |
| FASE 0.5 | ⏳ Manual | Setup Supabase dashboard (tablas SQL ya listas para ejecutar) |
| FASE 1  | ✅ Done | Parser robusto por header name, tokens en theme.ts |
| FASE 2  | ✅ Done | Descripción y Modo de Uso en ProductModal |
| FASE 3  | ⏳ Pending | Supabase client, Auth modal, fórmulas guardadas |
| FASE 4  | ✅ Done | Backend proxy Express + ChatBot flotante |
| FASE 5  | ⏳ Pending | RecetaPayload + WhatsApp Business API |

## Próximos pasos (FASE 3)

Requiere que el usuario complete FASE 0.5 (Supabase dashboard) primero:
1. `npm install @supabase/supabase-js` en frontend/
2. Crear `frontend/src/lib/supabaseClient.ts`
3. Crear `frontend/src/services/authService.ts`
4. Crear `frontend/src/store/authSlice.ts`
5. Auth modal en el header (tabs: Iniciar sesión / Registrarse)
6. Crear `frontend/src/types/savedFormula.ts`
7. Crear `frontend/src/services/savedFormulasService.ts`
8. Componente `FormulaEditor` (guardar fórmula personalizada)
9. Sección `SavedFormulas` en perfil del médico

## Supabase — schema (ya ejecutado en dashboard)

Tablas: `profiles` (id, full_name, role, specialty, license_number) y `saved_formulas` (id, user_id, original_formula_name, original_category, custom_name, formula_content, description, usage_instructions, notes).
Row Level Security habilitado en ambas. Trigger `on_auth_user_created` crea perfil automáticamente.
Schema documentado en `/supabase/schema.sql` (pendiente crear este archivo).

## Reglas generales

1. Leer el archivo completo antes de modificarlo.
2. Sin Firebase. Jamás.
3. TypeScript estricto. Sin `any`. Tipos en `frontend/src/assets/types/` o `frontend/src/types/`.
4. Redux para estado global. Sin estado local para datos que otros componentes necesiten.
5. Styled Components para todo. Sin CSS inline ni clases hardcodeadas.
6. Mobile-first. Los médicos usan el celular.
7. Variables de entorno para todo lo sensible. Nunca credenciales en el código.
8. La `anon key` de Supabase puede estar en el frontend. La `service_role key` NUNCA.
9. La API key de Anthropic NUNCA va en el frontend. Solo en backend/.env.
10. Commits en español, atómicos, uno por subobjetivo.
