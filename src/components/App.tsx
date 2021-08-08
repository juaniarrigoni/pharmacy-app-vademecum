import Landing from "./pages/Landing";

import "assets/styles/App.scss";
import "assets/scripts/smooth-scrolling";

import type { FC } from "react";

const App: FC = () => {
  return (
    <div id="App">
      <Landing />
    </div>
  );
};

export default App;
