import Routes from "lib/routes";
import AppContextProvider from "lib/AppContext";

import "theme/global.css";

const App = () => (
  <AppContextProvider>
    <Routes />
  </AppContextProvider>
);

export default App;
