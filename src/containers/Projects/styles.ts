import { BsArrowRight } from "react-icons/bs";

import styled from "styled-components";

import Section from "components/Section";
import { breakpoint, color, margin, padding } from "theme";
import generateGradient from "utils/gradient";

export const Wrapper = styled(Section)`
  display: grid;
  align-items: center;
  margin-bottom: ${margin.xxl};
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: ${margin.lg};

  @${breakpoint.mobile} {
    grid-template-columns: 1fr 1fr;
  }
`;

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
  border: 1px solid ${color.transparent};

  @${breakpoint.mobile_xs} {
    & > span:nth-of-type(1) {
      font-size: 13px;
    }
    & > span:nth-of-type(2) {
      line-height: 1.5;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
`;

export const GoIcon = styled(BsArrowRight)`
  font-size: 20px;
  margin-left: ${margin.md};
  transition: all 0.2s ease-in;
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

  a {
    color: ${color.white};
  }

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

  &:hover ${GoIcon}{
    margin-left: ${margin.lg};
  }
`
);

export const GoBtn = styled.div`
  display: flex;
  align-items: center;

  @${breakpoint.mobile_xs} {
    flex-direction: column;
    svg {
      margin-top: ${margin.lg};
    }
  }
`;
