import Section from "components/Section";
import styled, { margin } from "theme";

export const Wrapper = styled(Section)`
  position: relative;
`;

export const RocketContainer = styled.div`
  position: relative;
  height: 0;
  z-index: 9999;
`;

export const Rocket = styled.img.attrs({ src: "images/rocket.gif" })`
  pointer-events: none;
  width: 100px;
  z-index: 9999;
`;
