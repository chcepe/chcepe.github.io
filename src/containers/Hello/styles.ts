import styled, { breakpoint, color, margin } from "theme";
import Section from "components/Section";

export const Wrapper = styled(Section)`
  background: ${({ theme }) => theme.gradient};
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const BG = styled.img<{ src: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: overlay;
  pointer-events: none;
  filter: grayscale(1);
  object-fit: cover;
  object-position: center;
`;

export const SocialLinks = styled.div`
  margin: ${margin.xl} auto;
  padding: 16px;
  width: min-content;
  height: 100%;
  display: flex;
  gap: 8px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background: rgba(83, 83, 83, 0.25);
  backdrop-filter: blur(13px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  svg,
  a {
    transition: all 0.2s ease;
  }

  a {
    border-radius: 8px;
    border: 1px solid transparent;
    background: ${color.white};
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: ${color.black};

    :hover {
      background: ${({ theme }) => theme.gradient};
      border-color: ${color.white};
      margin: 0 16px;
      transform: scale(1.8) translateY(2px);
      transform-origin: center bottom;

      @${breakpoint.mobile} {
        transform: scale(1.2);
        margin: 0 2px;
      }

      svg {
        fill: ${color.white};
      }
    }
  }
`;

export const NotesWrapper = styled.div`
  background: rgba(235, 235, 235, 0.6);
  border: 1px solid #a6a6a6;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
`;

export const NotesHeader = styled.div`
  background: rgba(223, 223, 223, 1);
  box-shadow: inset 1px 1px 1px 0 rgba(255, 255, 255, 0.5);
  display: flex;
  padding: 16px 24px;
  gap: 8px;
`;

export const NotesContent = styled.div`
  padding: 36px;

  @${breakpoint.mobile} {
    padding: 36px 24px;

    span.desc {
      margin-top: 8px;
    }
  }
`;

export const NotesNavs = styled.div<{ $color: string }>`
  width: 18px;
  height: 18px;
  background: ${({ $color }) => $color};
  border-radius: 100%;
  border: 0.2px solid #a6a6a6;
`;

export const ScrollIcon = styled.div`
  &,
  &:before {
    position: absolute;
    left: 50%;
  }

  & {
    width: 28px;
    height: 50px;
    margin-left: -20px;
    margin-top: -35px;
    box-shadow: inset 0 0 0 1px #fff;
    border-radius: 25px;
    bottom: 10%;
  }

  &:before {
    content: "";
    width: 4px;
    height: 4px;
    background: #fff;
    margin-left: -2px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }

  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(30px);
    }
  }
`;
