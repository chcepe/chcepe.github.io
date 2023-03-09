import styled from "styled-components";

import { Props } from "./Section";

export const Wrapper = styled.section<Props>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: ${({ center }) =>
    center === "all" || center === "horizontally" ? "center" : "flex-start"};
  justify-content: ${({ center }) =>
    center === "all" || center === "vertically" ? "center" : "flex-start"};
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  width: 100%;
`;
