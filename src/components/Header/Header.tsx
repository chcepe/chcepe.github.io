import { FC, useContext } from "react";
import { FiHome, FiMoon, FiSun, FiVolume2, FiVolumeX } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import useSound from "use-sound";

import { AppContext } from "lib/AppContext";
import SOUNDS from "utils/sounds";

import * as S from "./styles";
import * as T from "./types";

const Header: FC<T.Props> = ({ title, withBack = true }) => {
  const { push, goBack } = useHistory();

  const [playPop] = useSound(SOUNDS.pop);

  const { darkMode, toggleDarkMode, withSound, toggleWithSound } = useContext(
    AppContext
  );

  const handleBack = () => {
    if (withSound) playPop();
    goBack();
  };

  return (
    <S.Wrapper>
      <S.Left>
        {withBack && <S.BackBtn onClick={handleBack} />}
        {title}
      </S.Left>
      <S.Right>
        <S.WithSoundBtn onClick={() => toggleWithSound()}>
          {withSound ? <FiVolume2 /> : <FiVolumeX />}
        </S.WithSoundBtn>
        <S.DarkModeBtn onClick={() => toggleDarkMode()}>
          {darkMode ? <FiMoon /> : <FiSun />}
        </S.DarkModeBtn>
        {withBack && (
          <S.HomeBtn
            onClick={() => {
              if (withSound) playPop();
              push("/");
            }}
          >
            <FiHome />
          </S.HomeBtn>
        )}
      </S.Right>
    </S.Wrapper>
  );
};

export default Header;
