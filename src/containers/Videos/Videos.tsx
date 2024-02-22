import React from "react";

import Text from "components/Text";
import Section from "components/Section";

import * as Styled from "./styles";
import { VIDEO_LIST } from "./constants";
import YoutubeThumbnail from "components/YoutubeThumbnail/YoutubeThumbnail";

const Videos: React.FC = () => {
  const [activeHover, setActiveHover] = React.useState<string>();

  return (
    <Section
      container={{ content: false }}
      header={{
        title: "Videos",
        desc: "Hmm, I make videos ocasionally.",
      }}
    >
      <Styled.List>
        {VIDEO_LIST.map(({ id, title }) => (
          <Styled.ItemWrapper
            key={id}
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            disabled={Boolean(activeHover && activeHover !== id)}
            onMouseEnter={() => setActiveHover(id)}
            onMouseLeave={() => setActiveHover(undefined)}
          >
            <Styled.Details>
              <Styled.PlayBtn />
              <Text weight={700} size="sm" color="white">
                {title}
              </Text>
            </Styled.Details>
            <Styled.ItemOverlay />
            <YoutubeThumbnail
              defaultImg={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
              gifImages={[
                `https://i.ytimg.com/vi/${id}/sd1.jpg`,
                `https://i.ytimg.com/vi/${id}/sd2.jpg`,
                `https://i.ytimg.com/vi/${id}/sd3.jpg`,
              ]}
            />
          </Styled.ItemWrapper>
        ))}
      </Styled.List>
    </Section>
  );
};

export default Videos;
