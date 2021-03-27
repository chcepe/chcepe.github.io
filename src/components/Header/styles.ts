import { IoMdArrowBack } from "react-icons/io";

import styled, { margin } from "theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: ${margin.lg};
  height: 70px;

  svg:hover {
    opacity: 0.7;
  }
`;

export const WithSoundBtn = styled.div`
  cursor: pointer;
  width: fit-content;
`;

export const DarkModeBtn = styled.div`
  cursor: pointer;
  width: fit-content;
  margin-left: ${margin.xl};
`;

export const HomeBtn = styled.div`
  cursor: pointer;
  width: fit-content;
  margin-left: ${margin.xl};
`;

export const BackBtn = styled(IoMdArrowBack)`
  font-size: 25px;
  cursor: pointer;
`;

export const Left = styled.div``;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: initial;
  width: 100%;

  svg {
    font-size: 25px;
  }
`;
