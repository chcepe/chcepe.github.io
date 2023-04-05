import React from "react";

import { AppContext } from "lib/AppContext";
import ScrollableItems from "components/ScrollableItems";
import Text from "components/Text";
import Section from "components/Section";

import * as Styled from "./styles";

const Blogs: React.FC = () => {
  const { blogs, loadingBlogs } = React.useContext(AppContext);

  return (
    <Section
      container={{ content: false }}
      header={{
        title: "Blogs",
        desc: "I also like to write sometimes during my free time.",
      }}
    >
      <ScrollableItems
        items={blogs.map(({ link, title, thumbnail }) => (
          <Styled.BlogItem href={link} target="_blank" key={link}>
            <Styled.BlogItemBG $bg={thumbnail} />
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
