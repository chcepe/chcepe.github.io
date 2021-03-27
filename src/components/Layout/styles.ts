import styled from "theme";

import { HeaderType } from "./types";

export const Wrapper = styled.div<{ headerType: HeaderType }>(
  ({ headerType }) => `

  ${
    headerType === "fixed" || headerType === "fixed-bg"
      ? `
      padding-top: 70px;`
      : ""
  }

  width: 100%;
  position: relative;
  overflow-x: hidden;
`
);

export const Header = styled.div<{ headerType?: HeaderType }>(
  ({ theme, headerType }) => `
  width: 100%;
  transition: all 0.2s ease;
  z-index: 99;


  ${
    headerType === "normal"
      ? `
  position: absolute;
  top: 0;
  left: 0;
  `
      : ""
  }

  ${
    headerType === "fixed-bg"
      ? `
  background: ${theme.header.background};
  position: fixed;
  top: 0;
  left: 0;
  `
      : ""
  }

  ${
    headerType === "fixed"
      ? `
  position: fixed;
  top: 0;
  left: 0;
  `
      : ""
  }
`
);
