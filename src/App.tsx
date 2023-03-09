import { ParallaxProvider } from "react-scroll-parallax";

import Routes from "lib/routes";
import AppContextProvider from "lib/AppContext";

import "theme/global.css";

const App = () => (
  <AppContextProvider>
    <ParallaxProvider>
      <Routes />
    </ParallaxProvider>
  </AppContextProvider>
);

export default App;
