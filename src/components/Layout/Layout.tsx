import React from "react";

import { DOCUMENT_TITLE } from "utils/contants";

import * as Styled from "./styles";

interface Props extends React.PropsWithChildren {
  title: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
  React.useEffect(() => {
    document.title = `${DOCUMENT_TITLE} - ${title}`;
  }, [title]);

  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default Layout;
