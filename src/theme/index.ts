import { darkMode, GlobalStyles, lightMode, styled } from "./theme";

const generateFontSize = (
  minSize: number,
  maxSize: number,
  maxWidth = 1600,
  minWidth = 300
) => {
  return `calc(${minSize}px + (${maxSize} - ${minSize}) * ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth})))`;
};

const fontSize = {
  regular: generateFontSize(14, 16),
  xs: generateFontSize(12, 14),
  sm: generateFontSize(12, 16),
  md: generateFontSize(24, 32),
  lg: generateFontSize(36, 48),
  xl: generateFontSize(48, 58),
  xxl: generateFontSize(60, 72),
};

const breakpoint = {
  mobile_xs: "media (max-device-width: 540px)",
  mobile: "media only screen and (max-width: 768px)",
  desktop: "media only screen and (min-width: 768px)",
};

const padding = {
  sm: "5px",
  md: "12px",
  lg: "20px",
  xl: "35px",
};

const margin = {
  sm: "2px",
  md: "5px",
  lg: "12px",
  xl: "20px",
  xxl: "35px",
};

const color = {
  transparent: "rgba(0,0,0,0)",
  white: "#ffffff",
  black: "#000000",
  grey100: "#5A5A5A",
  grey90: "#1a1a1a",
  grey80: "#4d4d4d",
  grey70: "#808080",
  grey60: "#b3b3b3",
  grey50: "#e6e6e6",
  link: "rgba(57,4,149,1)",
};

export interface THEME_TYPES {
  FONT_SIZES: keyof typeof fontSize | number;
  COLORS: keyof typeof color;
  MARGINS: keyof typeof margin | number;
  PADDINGS: keyof typeof padding | number;
}

const parseFontSize = (value: THEME_TYPES["FONT_SIZES"]) => {
  return typeof value === "number" ? `${value}px` : fontSize[value];
};

const parseMargin = (value: THEME_TYPES["MARGINS"]) => {
  return typeof value === "number" ? `${value}px` : margin[value];
};

const parsePadding = (value: THEME_TYPES["PADDINGS"]) => {
  return typeof value === "number" ? `${value}px` : padding[value];
};

const parseColor = (value: THEME_TYPES["COLORS"]) => {
  return color[value];
};

const theme = { lightMode, darkMode, GlobalStyles };

export default styled;

export {
  fontSize,
  breakpoint,
  padding,
  margin,
  color,
  parseFontSize,
  parseMargin,
  parsePadding,
  parseColor,
  theme,
};
