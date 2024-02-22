import React, { FC, useContext } from "react";

import Skeleton from "components/Skeleton";
import Text from "components/Text";
import { AppContext } from "lib/AppContext";
import { formatDate } from "utils/formatters";
import Link from "components/Link";

import * as S from "./styles";
import * as T from "./types";
import { getFirstImgSrc } from "./utils";

const Skeletons = ({ darkMode }: { darkMode?: boolean }) => (
  <>
    {Array.from({ length: 3 }).map((_, i) => (
      <Skeleton key={`blog-skeleton-${i}`} darkMode={darkMode} />
    ))}
  </>
);

const Blogs: FC<T.Props> = () => {
  const { darkMode, blogs, loadingBlogs } = useContext(AppContext);

  return (
    <S.Wrapper
      autoHeight
      title="📝 Blogs"
      desc="I also like to write sometimes during my free time"
    >
      {loadingBlogs ? (
        <Skeletons />
      ) : (
        <>
          {blogs.map(({ title, pubDate, link, description }) => (
            <Link href={link} target="_blank" key={link}>
              <S.Item bg={getFirstImgSrc(description)} darkMode={darkMode}>
                <S.Content>
                  <Text size="md" weight="bold" block>
                    {formatDate(pubDate)}
                  </Text>
                  <S.Title weight="bold" block>
                    {title}
                  </S.Title>
                </S.Content>
              </S.Item>
            </Link>
          ))}
        </>
      )}
    </S.Wrapper>
  );
};

export default Blogs;
