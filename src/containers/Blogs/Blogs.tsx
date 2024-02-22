import React from "react";

import { AppContext } from "lib/AppContext";
import ScrollableItems from "components/ScrollableItems";
import Text from "components/Text";
import Section from "components/Section";

import * as Styled from "./styles";
import { getFirstImgSrc } from "./utils";

const Blogs: React.FC = () => {
  const { blogs, loadingBlogs } = React.useContext(AppContext);
  const [activeHover, setActiveHover] = React.useState<string>();

  return (
    <Section
      container={{ content: false }}
      header={{
        title: "Blogs",
        desc: "I also like to write sometimes during my free time.",
      }}
    >
      <ScrollableItems
        items={blogs.map(({ link, title, description }) => (
          <Styled.BlogItem
            href={link}
            target="_blank"
            key={link}
            disabled={Boolean(activeHover && activeHover !== link)}
            onMouseEnter={() => setActiveHover(link)}
            onMouseLeave={() => setActiveHover(undefined)}
          >
            <Styled.BlogItemBG $bg={getFirstImgSrc(description)} />
            <Styled.BlogArrow />
            <Styled.Content>
              <Text maxWidth="50%" weight={700} color="white">
                {title}
              </Text>
            </Styled.Content>
          </Styled.BlogItem>
        ))}
      />
    </Section>
  );
};

export default Blogs;
