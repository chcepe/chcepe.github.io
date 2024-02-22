import { BsPlayCircle, BsPlayCircleFill } from "react-icons/bs";
import styled, { breakpoint, color } from "theme";
import { ThumbnailContainer } from "components/YoutubeThumbnail/YoutubeThumbnail";

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @${breakpoint.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ItemOverlay = styled.div`
  background: ${({ theme }) => theme.gradient};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  pointer-events: none;
  opacity: 0.4;
`;

export const Details = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: flex-end;
  padding: 25px;
  pointer-events: none;
  opacity: 0;

  span {
    transform: translateY(-30px);
  }
`;

export const PlayBtn = styled(BsPlayCircle)`
  width: 30px;
  height: 30px;
  color: ${color.white};
  position: absolute;
  top: 25px;
  transform: scale(0.8);
`;

export const ItemWrapper = styled.a<{ disabled?: boolean }>`
  aspect-ratio: 16/9;
  position: relative;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 0.8)};
  overflow: hidden;

  &,
  ${ThumbnailContainer}, ${ItemOverlay} {
    transition: all 0.5s ease;
  }

  ${Details}, ${Details} span, ${Details} ${PlayBtn} {
    transition: all 0.3s ease;
  }

  :hover {
    opacity: 1;

    ${ThumbnailContainer} {
      transform: scale(1.1);
    }

    ${ItemOverlay} {
      opacity: 0.7;
    }

    ${Details} {
      opacity: 1;

      span {
        transform: translateY(0);
      }

      ${PlayBtn} {
        transform: scale(1.1);
      }
    }
  }
`;
