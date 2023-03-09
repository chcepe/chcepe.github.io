import { FC } from "react";
import Typewriter from "typewriter-effect";

import Text from "components/Text";
import * as S from "./styles";

const Hello: FC = () => (
  <S.Wrapper center="all">
    <Text size="md" weight={300} block>
      Hello, I'm
    </Text>
    <Text size="xl" weight={900} block>
      Christian Cepe
    </Text>
    <Text block>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("A software engineer currently based in Prague.")
            .start();
        }}
      />
    </Text>
  </S.Wrapper>
);

export default Hello;
