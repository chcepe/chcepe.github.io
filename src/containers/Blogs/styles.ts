import Section from "components/Section";
import Text from "components/Text";
import styled, { breakpoint, color, fontSize, margin, padding } from "theme";
import generateGradient from "utils/gradient";

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${padding.xl};
  transition: all 0.1s ease-in;
`;

export const Item = styled.div<{ bg: string; darkMode?: boolean }>(
  ({ bg, darkMode }) => `
  width: 100%;
  height: 200px;
  background-image: ${
    !darkMode ? `${generateGradient(bg, 0.8)}, ` : ""
  } url("${bg}");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  color: #fff;
  position: relative;
  overflow: hidden;
  opacity: 0.7;
  transition: all 0.2s ease-in;
  cursor: pointer;
  ${
    darkMode
      ? `
    filter: grayscale(100%);
    ${Content} {
    border: 1px solid ${color.dark10};
    border-radius: 20px;
    background: rgba(33, 33, 33, 0.95);
    }
  `
      : ""
  }
  
  &:hover{
    opacity: 1;
    transform: scale(1.02);
    ${
      darkMode
        ? `
      ${Content} {
      border: 1px solid ${color.white};
    `
        : ""
    }
  }
`
);

export const Wrapper = styled(Section)`
  display: grid;
  grid-gap: ${margin.lg};
`;

export const Title = styled(Text)`
  font-size: ${fontSize.h3};

  @${breakpoint.mobile} {
    font-size: ${fontSize.lg};
  }
`;
