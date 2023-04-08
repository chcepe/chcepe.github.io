import { ParallaxProvider } from "react-scroll-parallax";

import Routes from "lib/routes";
import AppContextProvider from "lib/AppContext";
import StickyHeader from "containers/StickyHeader";

import "theme/global.css";

const App = () => (
  <AppContextProvider>
    <ParallaxProvider>
      <Routes />
    </ParallaxProvider>
    <StickyHeader />
  </AppContextProvider>
);

export default App;
