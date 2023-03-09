import React from "react";

import Text from "components/Text";

import * as Styled from "./styles";
import Container from "components/Container";

export interface Props {
  autoHeight?: boolean;
  withContainer?: boolean;
  center?: "all" | "vertically" | "horizontally";
  header?: {
    title: string;
    desc?: string;
  };
  children?: React.ReactNode;
}

const Section: React.FC<Props> = ({
  children,
  header,
  withContainer = true,
  ...rest
}) => {
  const content = (
    <>
      {header && (
        <Styled.Header>
          <Text size="md" weight="bold" block>
            {header.title}
          </Text>
          {header.desc && <Text>{header.desc}</Text>}
        </Styled.Header>
      )}
      <Styled.Content>{children}</Styled.Content>
    </>
  );

  return (
    <Styled.Wrapper {...rest}>
      {withContainer ? <Container>{content}</Container> : <>{content}</>}
    </Styled.Wrapper>
  );
};

export default Section;
