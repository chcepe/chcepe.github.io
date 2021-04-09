import Link from "components/Link";
import Section from "components/Section";
import styled, { breakpoint, margin, padding } from "theme";

export const Wrapper = styled(Section)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: ${padding.lg} 0;
  flex-direction: column;
`;

export const Avatar = styled.div`
  background: url("images/avatar.png"), ${({ theme }) => theme.avatar} no-repeat;
  background-size: cover;
  width: 150px;
  height: 150px;
  margin-bottom: ${margin.xl};
  border-radius: 100%;

  &:hover {
    background: url("images/avatar-2.png"),
      ${({ theme }) => theme.avatar} no-repeat;
    background-size: cover;
  }

  @${breakpoint.mobile} {
    width: 100px;
    height: 100px;
  }
`;

export const DarkModeBtn = styled.div`
  font-size: 30px;
  cursor: pointer;
  width: fit-content;

  @${breakpoint.mobile} {
    margin-bottom: ${margin.md};
  }
`;

export const SocialLinks = styled.div`
  margin-top: ${margin.xxl};
  display: block;
  text-align: center;
  font-size: 30px;
  a {
    margin: ${margin.md};
  }

  svg {
    color: ${({ theme }) => theme.socialIcons.color};
  }

  svg:hover {
    opacity: 0.6;
  }
`;

export const CVBtn = styled(Link)`
  padding: ${padding.md} ${padding.lg};
  background: ${({ theme }) => theme.cvBtn.background};
  border: ${({ theme }) => theme.cvBtn.border};
  color: ${({ theme }) => theme.cvBtn.color};
  border-radius: 20px;
  margin: ${margin.lg} 0;
  font-size: 10px;
`;
