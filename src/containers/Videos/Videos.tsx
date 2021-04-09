import React, { FC, useContext } from "react";
import { useHistory } from "react-router";
import useSound from "use-sound";

import { AppContext } from "lib/AppContext";
import Link from "components/Link";
import SOUNDS from "utils/sounds";
import { Content, GoBtn, GoIcon, Item } from "containers/Projects/styles";

import * as C from "./constants";
import * as S from "./styles";
import * as T from "./types";

const Videos: FC<T.Props> = ({ viewAll }) => {
  const { push } = useHistory();

  const { darkMode, withSound } = useContext(AppContext);
  const [playPop] = useSound(SOUNDS.pop);

  const list = viewAll ? C.VIDEO_LIST : C.VIDEO_LIST.slice(0, 3);

  return (
    <S.Wrapper
      autoHeight
      title="🎥 Videos"
      desc="Hmm, i make videos occasionally"
      viewAll={viewAll}
    >
      {list.map(({ link, thumbnail, title }) => {
        return (
          <Link href={link} target="_blank" key={link}>
            <S.Item bg={thumbnail} darkMode={darkMode} viewAll={viewAll}>
              <S.VideoIC />
              <S.Content>
                <S.Title>{title}</S.Title>
              </S.Content>
            </S.Item>
          </Link>
        );
      })}
      {!viewAll && (
        <Item
          darkMode={darkMode}
          bg={"/images/geometric.jpg"}
          onClick={() => {
            if (withSound) playPop();
            push("/videos");
            window.scrollTo({ top: 0, left: 0 });
          }}
        >
          <Content>
            <GoBtn>
              <span>View more</span>
              <GoIcon />
            </GoBtn>
          </Content>
        </Item>
      )}
    </S.Wrapper>
  );
};

export default Videos;
