import Section from "components/Section";
import styled, { breakpoint, margin } from "theme";

export const Wrapper = styled(Section)``;

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
