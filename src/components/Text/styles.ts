import styled, { css, CSSProperties } from "styled-components";

import { parseColor, parseFontSize, parseMargin, THEME_TYPES } from "theme";

interface Props {
  opacity?: number;
  block?: boolean;
  align?: CSSProperties["textAlign"];
  weight?: CSSProperties["fontWeight"] | number;
  display?: CSSProperties["display"];
  size?: THEME_TYPES["FONT_SIZES"];
  color?: THEME_TYPES["COLORS"];
  marginB?: THEME_TYPES["MARGINS"];
  marginT?: THEME_TYPES["MARGINS"];
  marginR?: THEME_TYPES["MARGINS"];
  marginL?: THEME_TYPES["MARGINS"];
  lineHeight?: CSSProperties["lineHeight"];
  truncate?: boolean;
  maxWidth?: string;
}

export const Text = styled.span<Props>`
  ${({
    display = "inline-block",
    block,
    size = "lg",
    marginB = 0,
    marginT = 0,
    marginL = 0,
    marginR = 0,
    opacity = 1,
    weight,
    align,
    color,
    onClick,
    truncate,
    maxWidth,
    lineHeight,
  }) => {
    const defaultFontWeight = weight ?? "normal";
    return css`
      ${onClick ? "cursor: pointer;" : ""};
      display: ${display};
      opacity: ${opacity};
      margin-bottom: ${parseMargin(marginB)};
      margin-top: ${parseMargin(marginT)};
      margin-left: ${parseMargin(marginL)};
      margin-right: ${parseMargin(marginR)};
      align-items: center;
      font-size: ${parseFontSize(size)};
      font-weight: ${defaultFontWeight};
      ${color &&
      css`
        color: ${parseColor(color)};
      `};
      ${lineHeight &&
      css`
        line-height: ${lineHeight};
      `};
      ${align &&
      css`
        text-align: ${align};
        display: block;
        width: 100%;
      `}
      ${block &&
      css`
        display: block;
        width: 100%;
      `}
        ${truncate &&
      css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `}
          ${maxWidth &&
      css`
        max-width: ${maxWidth};
      `}
    `;
  }}
`;
