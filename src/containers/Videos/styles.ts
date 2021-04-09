import { BsFillPlayFill } from "react-icons/bs";

import Section from "components/Section";
import Text from "components/Text";
import styled, { breakpoint, color, fontSize, margin, padding } from "theme";
import generateGradient from "utils/gradient";

export const Wrapper = styled(Section)<{ viewAll?: boolean }>(
  ({ viewAll }) => `
  display: grid;
  grid-gap: ${margin.lg};
  grid-template-columns: ${viewAll ? "1fr 1fr" : "1fr 1fr 1fr 1fr"};
  grid-gap: ${margin.lg};
  margin-bottom: ${margin.xxl};

  @${breakpoint.mobile} {
    grid-template-columns: ${viewAll ? "1fr" : "1fr 1fr"};
  }
`
);

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-in;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
`;

export const Title = styled(Text)`
  width: 100%;
  font-size: ${fontSize.md};
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(33, 33, 33, 0) 100%
  );
  padding: ${padding.lg};
  padding-top: 30%;
  opacity: 0;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  transition: all 0.2s ease;
  margin-bottom: -20px;
  @${breakpoint.mobile} {
    font-size: ${fontSize.md};
  }
`;

export const VideoIC = styled(BsFillPlayFill)`
  color: ${color.white};
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  transition: all 0.2s ease;
`;

export const Item = styled.div<{
  bg: string;
  darkMode?: boolean;
  viewAll?: boolean;
}>(
  ({ bg, darkMode, viewAll }) => `
  width: 100%;
  height: ${viewAll ? "400px" : "200px"};
  background-image: ${
    !darkMode ? `${generateGradient(bg, 0.3)}, ` : ""
  } url("${bg}");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  color: #fff;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease-in;
  cursor: pointer;

  @${breakpoint.mobile} {
    height: ${viewAll ? "300px" : "200px"};
  }

  ${
    darkMode
      ? `
    filter: grayscale(100%);
    ${Title} {
      color: #BCBCBC;
    }
    ${Content} {
    border: 1px solid ${color.dark10};
    border-radius: 20px;
    background: rgba(33, 33, 33, 0.8);
    }
  `
      : ""
  }

  &:hover ${Text}{
    opacity: 1;
    margin-bottom: 0;
  }

  &:hover ${VideoIC} {
    transform: scale(1.4);
  }
  
  &:hover{
    background-image: ${
      !darkMode ? `${generateGradient(bg, 0.1)}, ` : ""
    } url("${bg}");
    opacity: 1;
    transform: scale(1.02);
    ${Title} {
      color: ${color.white};
    }
    ${
      darkMode
        ? `
      ${Content} {
      border: 1px solid ${color.white};
      background: rgba(33, 33, 33, 0.3);
    `
        : ""
    }
  }
`
);
