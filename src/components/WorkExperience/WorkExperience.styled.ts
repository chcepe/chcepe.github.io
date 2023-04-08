import styled, { breakpoint, color, margin } from "theme";

export const Main = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-gap: 12px;
  cursor: pointer;
  padding: ${margin.xl} 0;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(2%);
    opacity: 0.7;

    .company-name {
      color: ${color.link};
    }
  }

  @${breakpoint.mobile} {
    grid-template-columns: 50px 1fr;
  }

  // Disable selecting text on toggoe
  * {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Supported by Chrome, Edge, Opera and Firefox */
  }
`;

export const ProjectList = styled.div`
  display: flex;
  gap: 2px;
  flex-wrap: wrap;

  span {
    opacity: 0.8;
    background: ${({ theme }) => theme.gradient};
    color: ${color.white};
    padding: 4px 8px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  span:hover {
    transform: translateY(1px);
    opacity: 1;
  }
`;

export const Wrapper = styled.div<{ expanded?: boolean }>`
  width: 100%;
  padding-bottom: ${({ expanded }) => (expanded ? "24px" : 0)};

  ${({ expanded }) =>
    expanded
      ? `
  ${Main} {
    padding-bottom: 0;
  }`
      : ``}

  span {
    line-height: 24px;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid ${color.grey50};
  }

  &:last-of-type {
    ${Main} {
      padding-bottom: 0;
    }
  }
`;

export const Logo = styled.div<{ $src: string }>`
  background: url("${({ $src }) => $src}") no-repeat;
  background-size: cover;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 1px solid ${color.grey50};

  @${breakpoint.mobile} {
    width: 50px;
    height: 50px;
  }
`;

export const Info = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @${breakpoint.mobile} {
    flex-direction: column-reverse;
    justify-content: start;
    align-items: start;
  }
`;

export const TechItems = styled.div`
  max-width: 60%;
  word-wrap: break-word;

  span:not(:first-of-type) {
    margin: 4px;
  }

  @${breakpoint.mobile} {
    max-width: 100%;
  }
`;
