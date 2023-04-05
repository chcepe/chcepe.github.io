import { css } from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";

import styled, { breakpoint, color } from "theme";

const cover = css`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

export const BlogItemBG = styled.div<{ $bg: string }>`
  ${cover}
  background: url("${({ $bg }) => $bg}") no-repeat;
  background-position: center;
  background-size: cover;
  backdrop-filter: blur(13px);
  mix-blend-mode: soft-light;
  opacity: 0.5;
`;

export const BlogArrow = styled(FiArrowUpRight)`
  position: absolute;
  top: 25px;
  right: 25px;
  width: 30px;
  height: 30px;
  color: ${color.white};
  transform: translateY(-30px);
  opacity: 0;
`;

export const Content = styled.div`
  ${cover}
  padding: 20px;
  display: flex;
  align-items: center;

  span {
    transform: translateY(10px);
  }
`;

export const BlogItem = styled.a`
  background: ${({ theme }) => theme.gradient};
  position: relative;
  width: 40vw;
  height: 250px;
  border-radius: 16px;
  flex: 0 0 auto;
  overflow: hidden;
  scroll-snap-align: center;
  cursor: pointer;
  padding: 10px;

  * {
    transition: 0.2s ease-in-out all;
  }

  :hover {
    ${BlogItemBG} {
      opacity: 0.2;
    }

    ${BlogArrow} {
      transform: translateY(0);
      opacity: 1;
    }

    ${Content} span {
      transform: translateY(0);
    }
  }

  @${breakpoint.mobile} {
    width: 60vw;
  }
`;
