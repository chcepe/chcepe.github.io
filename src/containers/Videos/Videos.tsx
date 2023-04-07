import React from "react";

import ScrollableItems from "components/ScrollableItems";
import Text from "components/Text";
import Section from "components/Section";

import * as Styled from "./styles";
import { VIDEO_LIST } from "./constants";

const Videos: React.FC = () => {
  return (
    <Section
      container={{ content: false }}
      header={{
        title: "Videos",
        desc: "Hmm, I make videos ocasionally.",
      }}
    >
      <ScrollableItems
        items={VIDEO_LIST.map(({ link, title, thumbnail }) => (
          <Styled.VideoItemWrapper href={link} target="_blank" key={link}>
            <Styled.ThumbnailWrapper>
              <Styled.Thumbnail>
                <Styled.VideoItemBG $bg={thumbnail} />
                <Styled.PlayBtn />
                <Styled.PlayBtnFilled />
              </Styled.Thumbnail>
            </Styled.ThumbnailWrapper>
            <Text weight="bold" size="xs" marginT="lg">
              {title}
            </Text>
          </Styled.VideoItemWrapper>
        ))}
      />
    </Section>
  );
};

export default Videos;
