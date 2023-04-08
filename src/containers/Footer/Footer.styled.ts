import styled from "styled-components";

import Container from "components/Container";
import { color } from "theme";

export const Wrapper = styled(Container)`
  border-top: 1px solid ${color.grey50};
  padding: 0 0 70px;
`;

export const Signature = styled.img.attrs({ src: "images/digital-sig.png" })`
  display: block;
  margin: 40px auto;
  opacity: 0.7;
  height: 70px;
`;
