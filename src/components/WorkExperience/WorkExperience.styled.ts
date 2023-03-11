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
  }
`;

export const Details = styled.div`
  padding: 0 0 24px;
`;

export const Wrapper = styled.div`
  width: 100%;

  span {
    line-height: 24px;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid ${color.grey50};
  }

  &:last-of-type {
    ${Main}, ${Details} {
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
