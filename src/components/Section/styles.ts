import styled from "styled-components";

import { margin } from "theme";

export const Wrapper = styled.div<{
  withHeader?: boolean;
  autoHeight?: boolean;
}>(
  ({ withHeader, autoHeight }) => `
  width: 100%;
  ${!autoHeight ? "min-height: 100vh;" : ""}
  display: grid;
  grid-template-rows: ${withHeader ? "auto 1fr" : "1fr"};
`
);

export const Header = styled.div`
  margin-bottom: ${margin.xxl};
`;

export const Content = styled.div``;
