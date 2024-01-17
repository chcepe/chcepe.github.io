import React from "react";

import Container from "components/Container";

import Avatar from "components/Avatar";
import Text from "components/Text";
import Flexbox from "components/Flexbox/Flexbox";
import useScrollPercentage from "hooks/useScrollPercentage";

import * as Styled from "./StickyHeader.styled";

const StickyHeader = () => {
  const { scrollPercent } = useScrollPercentage();

  return (
    <Styled.Wrapper>
      <Container>
        <Flexbox flexGap="8px" alignItems="center" flexDirection="row">
          <Avatar reversed size={50} />
          <Flexbox flexGap="2px" flexDirection="column">
            <Text weight="bold" size={14}>
              Christian Cepe
            </Text>
            <Text size={12}>Frontend Software Engineer</Text>
          </Flexbox>
        </Flexbox>
      </Container>
      <Styled.ScrollPercentage width={scrollPercent} />
    </Styled.Wrapper>
  );
};

export default StickyHeader;
