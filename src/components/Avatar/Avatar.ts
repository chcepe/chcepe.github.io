import styled from "styled-components";

export const Avatar = styled.div<{
  size?: number;
  withHover?: boolean;
  reversed?: boolean;
}>`
  background: url("images/avatar${({ reversed }) =>
      reversed ? "-2" : ""}.png"),
    ${({ theme }) => theme.gradient} no-repeat;
  background-size: cover;
  width: ${({ size }) => size || 150}px;
  height: ${({ size }) => size || 150}px;
  border-radius: 100%;

  ${({ withHover, theme, reversed }) =>
    withHover
      ? `
  
  &:hover {
    background: url("images/avatar${reversed ? "" : "-2"}.png"),
      ${theme.gradient} no-repeat;
    background-size: cover;
  }
  `
      : ""}
`;
