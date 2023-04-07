import { css } from "styled-components";
import { BsPlayCircle, BsPlayCircleFill } from "react-icons/bs";

import styled, { breakpoint, color } from "theme";

const cover = css`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const center = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const VideoItemBG = styled.div<{ $bg: string }>`
  ${cover}
  background: url("${({ $bg }) => $bg}") no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.5;
`;

export const PlayBtn = styled(BsPlayCircle)`
  ${center}
  width: 30px;
  height: 30px;
  color: ${color.white};
`;

export const PlayBtnFilled = styled(BsPlayCircleFill)`
  ${center}
  width: 30px;
  height: 30px;
  color: ${color.white};
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

export const ThumbnailWrapper = styled.div`
  background: ${({ theme }) => theme.gradient};
  aspect-ratio: 4/3;
  height: 200px;
  flex: 0 0 auto;
  overflow: hidden;
  scroll-snap-align: center;
  cursor: pointer;
  padding: 12px;
  border-radius: 16px;
  opacity: 0.8;

  &,
  * {
    transition: 0.2s ease-in-out all;
  }

  @${breakpoint.mobile} {
    width: 60vw;
  }
`;

export const Thumbnail = styled.div`
  background: rgba(0, 0, 0.5);
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const VideoItemWrapper = styled.a`
  span {
    color: ${color.black};
  }

  :hover {
    span {
      color: ${color.link};
    }

    ${VideoItemBG} {
      opacity: 0.4;
    }

    ${ThumbnailWrapper} {
      opacity: 1;
    }

    ${Thumbnail} {
      border-color: rgba(255, 255, 255, 0.9);
    }

    ${PlayBtn} {
      transform: translate(-50%, -50%) scale(1.9);
      opacity: 0;
    }

    ${PlayBtnFilled} {
      transform: translate(-50%, -50%) scale(1.4);
      opacity: 1;
    }

    ${Content} span {
      transform: translateY(0);
    }
  }
`;
