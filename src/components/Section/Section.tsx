import React from "react";

import Text from "components/Text";

import * as S from "./styles";

export interface Props {
  center?: "all" | "vertically" | "horizontally";
  header?: {
    title: string;
    desc?: string;
  };
  children?: React.ReactNode;
}

const Section: React.FC<Props> = ({ children, header, ...rest }) => (
  <S.Wrapper {...rest}>
    {header && (
      <S.Header>
        <Text size="md" weight="bold" block>
          {header.title}
        </Text>
        {header.desc && <Text>{header.desc}</Text>}
      </S.Header>
    )}
    <S.Content>{children}</S.Content>
  </S.Wrapper>
);

export default Section;
