import Section from "components/Section";
import styled, { margin } from "theme";

export const Wrapper = styled(Section)`
  position: relative;
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
`;

export const RocketContainer = styled.div`
  position: relative;
  height: 0;
`;

export const Rocket = styled.img.attrs({ src: "images/rocket.gif" })`
  pointer-events: none;
  width: 100px;
`;
