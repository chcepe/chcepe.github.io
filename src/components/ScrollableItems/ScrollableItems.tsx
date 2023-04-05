import React from "react";

import * as Styled from "./ScrollabeItems.styled";

interface Props {
  items: React.ReactNode[];
}

const ScrollableItems: React.FC<Props> = ({ items }) => {
  return (
    <Styled.Wrapper>
      {items.map((item) => (
        <>{item}</>
      ))}
    </Styled.Wrapper>
  );
};

export default ScrollableItems;
