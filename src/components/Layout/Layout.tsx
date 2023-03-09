import React from "react";

import Container from "components/Container";
import { DOCUMENT_TITLE } from "utils/contants";

import * as S from "./styles";

interface Props extends React.PropsWithChildren {
  title: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
  React.useEffect(() => {
    document.title = `${DOCUMENT_TITLE} - ${title}`;
  }, [title]);

  return (
    <S.Wrapper>
      <Container>{children}</Container>
    </S.Wrapper>
  );
};

export default Layout;
