import { IoMdArrowBack } from "react-icons/io";

import Container from "components/Container";
import styled, { breakpoint, color, margin, padding } from "theme";

export const Wrapper = styled.div`
  height: 100vh;
`;

export const StyledContainer = styled(Container)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: self-start;
  color: ${color.white};
  * {
    color: ${theme.singleProject.contentColor};
  }
`
);

export const OverlayBG = styled.div`
  background: linear-gradient(
    0deg,
    rgba(33, 33, 33, 0.99),
    rgba(33, 33, 33, 0.9)
  );
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div<{ darkMode?: boolean }>(
  ({ darkMode }) => `
  ${Logo}{
    filter: invert(${!darkMode ? 1 : 0});
  }
`
);

export const Header = styled(Container)(
  ({ theme }) => `
  color: ${theme.singleProject.headerColor};
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-gap: ${margin.lg};
  *{
    color: ${theme.singleProject.headerColor};
  }
`
);

export const DarkModeBtn = styled.div`
  font-size: 30px;
  cursor: pointer;
  width: fit-content;
`;

export const BackBtn = styled(IoMdArrowBack)`
  font-size: 25px;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 70px;
  margin: ${margin.xl} 0;
`;

export const Techonologies = styled.div`
  display: block;
`;

export const Tag = styled.span(
  ({ theme }) => `
  background: ${theme.tag.background};
  color: ${theme.tag.color};
  border: ${theme.tag.border};
  padding: ${padding.sm} ${padding.md};
  display: inline-block;
  border-radius: 5px;
  margin: 2px;
  font-size: 12px;
`
);

export const Table = styled.table`
  margin-top: ${margin.xl};
  td {
    padding: 0;
    vertical-align: top;
    padding-bottom: ${padding.md};
  }
  td:nth-of-type(1) {
    padding-right: ${padding.lg};
    svg {
      margin-top: 5px;
    }
  }
`;

export const Platforms = styled.div`
  margin-top: ${margin.xl};
  display: flex;
  align-items: center;

  a:not(:last-of-type) {
    margin-right: ${margin.lg};
  }
`;

export const PlatformIcon = styled.div(
  ({ theme }) => `
  font-size: 30px;
  opacity: 1;
  &:hover{
    opacity: 0.7;
  }
  svg {
    color: ${theme.singleProject.platformLinkColor};
  }
`
);

export const Suggestions = styled.div(
  ({ theme }) => `
  margin-top: ${margin.xl};
  padding-top: ${padding.xl};
  padding-bottom: ${padding.xl};
  border-top: ${theme.singleProject.suggestionsBorder};
`
);

export const Preview = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  iframe {
    margin: 10px 0;
    border: 0;
    width: 60%;
    height: 400px;
    @${breakpoint.mobile} {
      width: 100%;
      height: 300px;
    }
  }

  img {
    max-width: 60%;
    margin: 10px 0;
    border: ${({ theme }) => theme.singleProject.previewBorder};
    @${breakpoint.mobile} {
      max-width: 100%;
    }
  }
`;
