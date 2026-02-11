/* eslint-disable @typescript-eslint/naming-convention */

export const COLORS = {
  // New palette from Figma
  OFF_WHITE: "#F5EFE6",
  BEIGE: "#E8AF3E",
  SAGE: "#9D976B",
  DARK_BROWN: "#3E3529",
  BROWN: "#7C6A55",
  DARK_GREEN: "#7C6A55",

  // Mapped for backwards compatibility
  WHITE: "#F5EFE6", // Off White
  BLACK: "#3E3529", // Dark Brown
  PRIMARY: "#9D976B", // Sage
  PRIMARY_LIGHTER: "#9D976B",
  PRIMARY_LIGHTEST: "#F5EFE6",
  BLACK_RGB: "62, 53, 41", // Dark Brown RGB
  WHITE_RGB: "245, 239, 230", // Off White RGB
  PRIMARY_RGB: "157, 151, 107", // Sage RGB
  VIOLET_RGB: "124, 106, 85", // Brown RGB
  RED_RGB: "232, 175, 62", // Beige RGB
  PLACEHOLDER: "#7C6A55",
};

export const FONT_FAMILY = {
  PRIMARY: "'Newsreader', serif",
  BODY: "'Rethink Sans', sans-serif",
};

export const BREAKPOINTS = {
  MOBILE: "600px",
  TABLET: "801px",
};

export const MEDIA_QUERIES = {
  MOBILE: `@media only screen and (max-width: ${BREAKPOINTS.MOBILE})`,
  TABLET: `@media only screen and (max-width: ${BREAKPOINTS.TABLET})`,
};

export const BOX_SHADOW = {
  SQUARE: `0 2.5px 10px -2.5px rgba(${COLORS.BLACK_RGB}, 0.15)`,
  SQUARE_HOVER: `0 5px 15px -2.5px rgba(${COLORS.BLACK_RGB}, 0.3)`,
};

export const BORDER_RADIUS = {
  SQUARE: "20px",
};

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
  display: block;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(${COLORS.BLACK_RGB}, 0.5);
  }

  * {
    cursor: pointer;
  }
`;
