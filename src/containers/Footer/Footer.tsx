import { FC, useContext } from "react";

import { AppContext } from "lib/AppContext";
import Text from "components/Text";
import Link from "components/Link";

import * as S from "./styles";

const Footer: FC = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <S.Wrapper autoHeight>
      <Text align="center" marginB="xl">
        Made with ❤️ from 🇵🇭
      </Text>
      <Link href="https://github.com/chcepe/chcepe.github.io" target="_blank">
        <Text
          align="center"
          color={darkMode ? "white" : "black"}
          size="sm"
          opacity={0.7}
        >
          chcepe.github.io
        </Text>
      </Link>
    </S.Wrapper>
  );
};

export default Footer;
