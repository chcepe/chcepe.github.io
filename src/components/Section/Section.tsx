import React from "react";

import Text from "components/Text";

import * as S from "./styles";
import * as T from "./types";

const Section: React.FC<T.Props> = ({
  children,
  title,
  desc,
  autoHeight,
  ...rest
}) => {
  const withHeader = Boolean(title || desc);
  return (
    <S.Wrapper autoHeight={autoHeight} withHeader={withHeader}>
      {withHeader && (
        <S.Header>
          {title && (
            <Text weight="bold" marginB="md" size="h1" block>
              {title}
            </Text>
          )}
          {desc && <Text opacity={0.7}>{desc}</Text>}
        </S.Header>
      )}
      <S.Content {...rest}>{children}</S.Content>
    </S.Wrapper>
  );
};

export default Section;
