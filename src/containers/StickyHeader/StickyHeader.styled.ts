import Container from "components/Container";
import styled from "styled-components";

import { color } from "theme";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 999;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${color.grey50};

  ${Container} {
    height: 68px;
    display: flex;
    align-items: center;
  }
`;

export const ScrollPercentage = styled.div<{ width: number }>`
  background: ${color.grey60};
  height: 2px;
  width: ${({ width }) => width}%;
  transition: all 0.05s ease-in-out;
`;
