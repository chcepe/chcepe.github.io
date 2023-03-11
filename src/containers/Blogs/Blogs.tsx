import React from "react";

import { AppContext } from "lib/AppContext";
import Text from "components/Text";

import * as Styled from "./styles";

const Blogs: React.FC = () => {
  const { blogs, loadingBlogs } = React.useContext(AppContext);

  return (
    <Styled.Wrapper
      container={{ content: false }}
      header={{
        title: "Blogs",
        desc: "I also like to write sometimes during my free time.",
      }}
    >
      <Styled.BlogList>
        {blogs.map(({ link, title, thumbnail }) => (
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
      </Styled.BlogList>
    </Styled.Wrapper>
  );
};

export default Blogs;
