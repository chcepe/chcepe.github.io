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
  avatar: `linear-gradient(to top right,rgba(57,4,149,0.8), rgb(149,57,4))`,
  socialIcons: {
    color: "#000",
  },
  cvBtn: {
    border: "1px solid #000",
    color: "#000",
    background: "none",
  },
  singleProject: {
    gradient:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.99),rgba(255, 255, 255, 0.95))",
    headerColor: "#000",
    contentColor: "#000",
    platformLinkColor: "#000",
    suggestionsBorder: "1px solid rgba(0, 0, 0, 0.2)",
    previewBorder: "1px solid rgba(0, 0, 0, 0.2)",
  },
  tag: {
    background: "rgba(255, 255, 255,0.2)",
    color: "#000",
    border: "1px solid rgba(0, 0, 0, 0.5)",
  },
  header: {
    background: "rgba(255, 255, 255, 0.9)",
  },
};

export type Theme = typeof lightMode;

export const darkMode: Theme = {
  body: {
    background: "#212121",
    color: "#fff",
  },
  avatar: `#3c3c3c`,
  socialIcons: {
    color: "#fff",
  },
  cvBtn: {
    border: "1px solid #fff",
    color: "#fff",
    background: "none",
  },
  singleProject: {
    gradient:
      "linear-gradient(0deg, rgba(33, 33, 33, 0.99),rgba(33, 33, 33, 0.98))",
    headerColor: "#fff",
    contentColor: "#fff",
    platformLinkColor: "#fff",
    suggestionsBorder: "1px solid rgba(255, 255, 255, 0.2)",
    previewBorder: "1px solid rgba(255, 255, 255, 0.2)",
  },
  tag: {
    background: "rgba(33, 33, 33, 0.6)",
    color: "#fff",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  header: {
    background: "rgba(33, 33, 33, 0.9)",
  },
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
