import React from "react";

import Container from "components/Container";
import { DOCUMENT_TITLE } from "utils/contants";

import * as S from "./styles";
import * as T from "./types";

const Layout: React.FC<T.Props> = ({
  children,
  title,
  header,
  fixedHeader = true,
}) => {
  const [scrollTop, setScrollTop] = React.useState(0);

  let headerType: T.HeaderType = "no";

  const hasHeader = Boolean(header);

  if (hasHeader) headerType = "normal";
  if (fixedHeader) headerType = "fixed";
  if (scrollTop >= 70 && fixedHeader) headerType = "fixed-bg";

  React.useEffect(() => {
    document.title = `${DOCUMENT_TITLE} - ${title}`;
    if (fixedHeader) {
      const logit = () => {
        setScrollTop(window.pageYOffset);
      };

      const watchScroll = () => {
        window.addEventListener("scroll", logit);
      };
      watchScroll();
      return () => {
        window.removeEventListener("scroll", logit);
      };
    }
  });

  return (
    <S.Wrapper headerType={headerType}>
      {header && (
        <S.Header headerType={headerType}>
          <Container>{header}</Container>
        </S.Header>
      )}
      <Container>{children}</Container>
    </S.Wrapper>
  );
};

export default Layout;
