import styled, { breakpoint, color, margin } from "theme";
import Section from "components/Section";

export const Wrapper = styled(Section)`
  background: linear-gradient(
    to top right,
    rgba(57, 4, 149, 0.8),
    rgb(149, 57, 4)
  );
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
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: ${margin.xl};

  a {
    font-size: 24px;
    color: ${color.white};
    transition: all 0.2s ease;

    :hover {
      transform: translateY(2px);
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
