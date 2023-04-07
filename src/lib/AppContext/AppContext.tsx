import React from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";

import useLocalStorage from "utils/hooks/useLocalStorage";
import { theme } from "theme";
import { Blog } from "models";

const { GlobalStyles } = theme;

interface ContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;

  blogs: Blog[];
  loadingBlogs?: boolean;
}

const CONTEXT_INITIAL_VALUES: ContextProps = {
  darkMode: false,
  toggleDarkMode: () => {},

  blogs: [],
};

export const AppContext = React.createContext<ContextProps>(
  CONTEXT_INITIAL_VALUES
);

interface Props {
  children: React.ReactNode;
}

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [loadingBlogs, setLoadingBlogs] = React.useState(false);
  const [darkMode, setDarkMode] = useLocalStorage<boolean>(
    "darkmode",
    CONTEXT_INITIAL_VALUES.darkMode
  );

  const [blogs, setBlogs] = React.useState<Blog[]>([]);

  const toggleDarkMode = () => {
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

  React.useEffect(() => {
    if (!blogs.length && !loadingBlogs) fetchBlogs();
  }, [blogs, loadingBlogs]);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
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
