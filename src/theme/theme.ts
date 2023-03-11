// https://github.com/styled-components/styled-components/issues/1589#issuecomment-435613664
import baseStyled, {
  createGlobalStyle,
  ThemedStyledInterface,
} from "styled-components";

import { color } from ".";

export const lightMode = {
  body: {
    background: "#ffffff",
    color: "#000",
  },
  gradient: `linear-gradient(to top right,rgba(57,4,149,0.8), rgb(149,57,4))`,
};

export type Theme = typeof lightMode;

export const darkMode: Theme = {
  body: {
    background: "#212121",
    color: "#fff",
  },
  gradient: `#3c3c3c`,
};

export const GlobalStyles = createGlobalStyle(
  ({ theme }: { theme: Theme }) => `
  body {
    background: ${theme.body.background};
    color: ${theme.body.color};
    transition: background 0.1s ease;
  }

  a {
    color: ${color.link}
  }
`
);

export const styled = baseStyled as ThemedStyledInterface<Theme>;
