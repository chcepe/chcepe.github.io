import styled from "theme";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  width: 100%;
  padding: 0 20px;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  & > div {
    scroll-snap-align: center;
  }

  ::-webkit-scrollbar {
    height: 0;
    width: 0;
    background: transparent;
  }
`;
