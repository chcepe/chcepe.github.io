import styled from "styled-components";

export const Skeleton = styled.div<{ darkMode?: boolean }>(
  ({ darkMode }) => `
  background: url("skeletons/${darkMode ? "dark" : "light"}.svg") no-repeat;
  width: 100%;
  height: 200px;
  background-size: cover;
  border-radius: 20px;
  opacity: 0.6;
`
);
