import { FiArrowUpRight } from "react-icons/fi";
import styled from "styled-components";
import { color } from "theme";

export const LinkArrow = styled(FiArrowUpRight)`
  position: absolute;
  top: 25px;
  right: 25px;
  width: 30px;
  height: 30px;
  color: ${color.white};
  transform: translateY(-30px);
  opacity: 0;
`;
