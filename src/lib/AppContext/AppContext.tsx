import { createContext, FC, useEffect, useState } from "react";
import axios from "axios";
import useSound from "use-sound";
import { ThemeProvider } from "styled-components";

import useLocalStorage from "utils/hooks/useLocalStorage";
import { theme } from "theme";
import { Blog } from "utils/types";
import SOUNDS from "utils/sounds";

import { INITIAL_VALUES } from "./constants";
import * as T from "./types";

const { GlobalStyles } = theme;

export const AppContext = createContext<T.Props>(INITIAL_VALUES);

interface Props {
  children: React.ReactNode;
}

const AppContextProvider: FC<Props> = ({ children }) => {
  const [playLightsOn] = useSound(SOUNDS.lightsOn);
  const [playLightsOff] = useSound(SOUNDS.lightsOff);
  const [playPopOn] = useSound(SOUNDS.popOn);
  const [playPopOff] = useSound(SOUNDS.popOff);

  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [withSound, setWithSound] = useLocalStorage<boolean>(
    "soundmode",
    INITIAL_VALUES.withSound
  );
  const [darkMode, setDarkMode] = useLocalStorage<boolean>(
    "darkmode",
    INITIAL_VALUES.darkMode
  );

  const [blogs, setBlogs] = useState<Blog[]>([]);

  const toggleWithSound = () => {
    if (withSound) {
      playPopOff();
    } else {
      playPopOn();
    }
    setWithSound(!withSound);
  };
  const toggleDarkMode = () => {
    if (withSound) {
      if (darkMode) {
        playLightsOn();
      } else {
        playLightsOff();
      }
    }
    setDarkMode(!darkMode);
  };

  const fetchBlogs = () => {
    setLoadingBlogs(true);
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chcepe`
      )
      .then((response) => setBlogs(response.data.items))
      .finally(() => setLoadingBlogs(false));
  };

  useEffect(() => {
    if (!blogs.length && !loadingBlogs) fetchBlogs();
  }, [blogs, loadingBlogs]);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        withSound,
        toggleWithSound,
        loadingBlogs,
        blogs,
      }}
    >
      <ThemeProvider theme={darkMode ? theme.darkMode : theme.lightMode}>
        <>
          <GlobalStyles />
          {children}
        </>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
