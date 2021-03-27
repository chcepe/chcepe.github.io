import styled from "styled-components";

import Section from "components/Section";
import { margin } from "theme";

export const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${margin.xxl} 0;
`;
