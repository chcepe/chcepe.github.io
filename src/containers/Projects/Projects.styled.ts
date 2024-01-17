import styled from "styled-components";
import { css } from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";

import Section from "components/Section";
import { breakpoint, color } from "theme";
import LinkArrow from "components/LinkArrow";

export const Wrapper = styled(Section)`
  position: relative;
`;

const cover = css`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

export const ProjectItemBG = styled.div<{ $bg: string }>`
  ${cover}
  background: url("${({ $bg }) => $bg}") no-repeat;
  background-position: center;
  background-size: cover;
  backdrop-filter: blur(13px);
  mix-blend-mode: soft-light;
  opacity: 0.2;
  mix-blend-mode: multiply;
`;

export const Logo = styled.div<{ $url: string }>`
  background: url(${({ $url }) => $url}) no-repeat;
  width: 100%;
  height: 30px;
  margin-bottom: 18px;
  background-size: contain;
`;

export const Content = styled.div`
  ${cover}
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(10px);
`;

export const ProjectItem = styled.div`
  background: ${({ theme }) => theme.gradient};
  position: relative;
  width: 20vw;
  aspect-ratio: 1/1;
  border-radius: 12px;
  flex: 0 0 auto;
  overflow: hidden;
  scroll-snap-align: center;
  cursor: pointer;
  padding: 10px;
  opacity: 0.8;

  &,
  * {
    transition: 0.2s ease-in-out all;
  }

  :hover {
    opacity: 1;

    ${ProjectItemBG} {
      opacity: 0.2;
    }

    ${LinkArrow} {
      transform: translateY(0);
      opacity: 1;
    }

    ${Content} {
      transform: translateY(0);
    }
  }

  @${breakpoint.mobile} {
    width: 60vw;
  }
`;
