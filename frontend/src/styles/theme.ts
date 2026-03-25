/* eslint-disable @typescript-eslint/naming-convention */
// Single source of truth for all design tokens.
// All styled components and constants must import from here.

export const COLORS = {
  // Palette (Figma)
  OFF_WHITE:  '#F3EFE6',
  BEIGE:      '#BDAF9E',
  SAGE:       '#9D977B',
  DARK_BROWN: '#3E3529',
  BROWN:      '#7C6A55',

  // Semantic aliases
  WHITE:   '#F3EFE6', // OFF_WHITE
  BLACK:   '#3E3529', // DARK_BROWN
  PRIMARY: '#9D977B', // SAGE
  PLACEHOLDER: '#7C6A55', // BROWN

  // RGB variants (for rgba() usage)
  WHITE_RGB:   '243, 239, 230', // OFF_WHITE
  BLACK_RGB:   '62, 53, 41',    // DARK_BROWN
  PRIMARY_RGB: '157, 151, 123', // SAGE
  BROWN_RGB:   '124, 106, 85',  // BROWN

  // Gradient stops
  PRIMARY_LIGHTER: '#B0AA90',
} as const;

export const FONT_FAMILY = {
  PRIMARY: "'Newsreader', serif",
  BODY:    "'Rethink Sans', sans-serif",
} as const;

export const BREAKPOINTS = {
  MOBILE: '600px',
  TABLET: '801px',
} as const;

export const MEDIA_QUERIES = {
  MOBILE: `@media only screen and (max-width: ${BREAKPOINTS.MOBILE})`,
  TABLET: `@media only screen and (max-width: ${BREAKPOINTS.TABLET})`,
} as const;

export const BOX_SHADOW = {
  SQUARE:       `0 2.5px 10px -2.5px rgba(${COLORS.BLACK_RGB}, 0.15)`,
  SQUARE_HOVER: `0 5px 15px -2.5px rgba(${COLORS.BLACK_RGB}, 0.3)`,
} as const;

export const BORDER_RADIUS = {
  SQUARE: '20px',
} as const;

export const BUTTON_STYLE = `
  cursor: pointer;
  color: ${COLORS.WHITE};
  display: block;
  width: fit-content;
  font-weight: 900;
  background: linear-gradient(
    180deg,
    ${COLORS.PRIMARY_LIGHTER} 0,
    ${COLORS.PRIMARY} 100%
  );
  text-transform: uppercase;
  border: 0;
  border-radius: 15px;
  padding: 1em 1.5em;
  box-shadow: 0 0 10px 0 rgba(${COLORS.BLACK_RGB}, 0.3);
  margin: 0 auto;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(${COLORS.BLACK_RGB}, 0.5);
  }

  * {
    cursor: pointer;
  }
`;
