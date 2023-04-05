import styled, { CSSProperties, css } from "styled-components";

interface FlexBox {
  alignContent?: CSSProperties["alignContent"];
  alignItems?: CSSProperties["alignItems"];
  display?: "inline-flex" | "flex";
  flexDirection?: CSSProperties["flexDirection"];
  flexFlow?: CSSProperties["flexFlow"];
  flexWrap?: CSSProperties["flexWrap"];
  flexGap?: CSSProperties["gap"];
  justifyContent?: CSSProperties["justifyContent"];
  width?: CSSProperties["width"];
}

const Flexbox = styled.div<FlexBox>`
  align-content: ${({ alignContent = "stretch" }) => alignContent};
  align-items: ${({ alignItems = "stretch" }) => alignItems};
  display: ${({ display = "flex" }) => display};
  ${({ flexFlow = "row", flexDirection = "row", flexWrap = "wrap" }) =>
    !flexFlow &&
    css`
      flex-direction: ${flexDirection};
      flex-wrap: ${flexWrap};
    `}
  ${({ flexFlow }) =>
    flexFlow &&
    css`
      flex-flow: ${flexFlow};
    `}
  justify-content: ${({ justifyContent }) => justifyContent};
  width: ${({ width = "auto" }) => width};
  gap: ${({ flexGap = "0" }) => flexGap};
`;

export default Flexbox;
