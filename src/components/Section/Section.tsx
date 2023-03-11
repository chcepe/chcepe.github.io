import React from "react";

import Text from "components/Text";
import Container from "components/Container";

import * as Styled from "./styles";

interface Header {
  title: string;
  desc?: string;
}
export interface Props {
  container?: {
    header?: boolean;
    content?: boolean;
  };
  center?: "all" | "vertically" | "horizontally";
  header?: Header;
  children?: React.ReactNode;
}

const Section: React.FC<Props> = ({ children, header, container, ...rest }) => {
  const {
    header: withContainerHeader = true,
    content: withContainerContent = true,
  } = container || {};

  const content = <Styled.Content>{children}</Styled.Content>;

  return (
    <Styled.Wrapper {...rest}>
      {/* Section Header */}
      {header && (
        <>
          {withContainerHeader ? (
            <Container>
              <Header {...header} />
            </Container>
          ) : (
            <Header {...header} />
          )}
        </>
      )}

      {/* Section Content */}
      {withContainerContent ? <Container>{content}</Container> : <>{content}</>}
    </Styled.Wrapper>
  );
};

const Header: React.FC<Header> = ({ title, desc }) => (
  <Styled.Header>
    <Text size="md" weight="bold" block>
      {title}
    </Text>
    {desc && <Text color="grey80">{desc}</Text>}
  </Styled.Header>
);

export default Section;
