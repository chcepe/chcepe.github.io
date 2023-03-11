import styled, { breakpoint, color, margin } from "theme";
import Section from "components/Section";

export const Wrapper = styled(Section)`
  background: ${({ theme }) => theme.gradient};
  height: 100vh;
  position: relative;
  overflow: hidden;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
`;

export const BG = styled.div`
  width: 100%;
  height: 100%;
  background: url("images/prague.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: soft-light;
  pointer-events: none;
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

      svg {
        fill: ${color.white};
      }
    }
  }
`;

export const NotesWrapper = styled.div`
  background: rgba(235, 235, 235, 0.7);
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
  padding: 20px 40px;

  span.intro,
  span.name,
  span.desc {
    line-height: 60px;
  }

  @${breakpoint.mobile} {
    padding: 24px;

    span.intro,
    span.name {
      line-height: 46px;
    }

    span.desc {
      margin-top: 18px;
      line-height: 20px;
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
