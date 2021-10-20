/* eslint-disable @typescript-eslint/naming-convention */

export const COLORS = {
  WHITE: "#ffffff",
  BLACK: "#000000",
  PRIMARY: "#00a54f",
  PRIMARY_LIGHTER: "#32b772",
  PRIMARY_LIGHTEST: "#f2faf6",
  BLACK_RGB: "0, 0, 0",
  WHITE_RGB: "255, 255, 255",
  PRIMARY_RGB: "0, 165, 79",
  VIOLET_RGB: "65, 23, 171",
  RED_RGB: "255, 40, 0",
};

export const FONT_FAMILY = {
  PRIMARY: '"Fredoka One", cursive',
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
