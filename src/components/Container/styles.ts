import styled, { breakpoint } from "theme";

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 30px;

  @${breakpoint.mobile} {
    padding: 0 20px;
  }
`;
