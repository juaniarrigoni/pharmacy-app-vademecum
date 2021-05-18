import { FC } from "react";

import Landing from "./components/Landing";
import Vademecum from "./components/Vademecum";
import Activos from "./components/Activos";
import Contact from "./components/Contact";
import Signature from "./components/Signature";

import "./App.scss";
import "./assets/smooth-scrolling";

const App: FC = () => {
  return (
    <div id="App">
      <Landing />
      <Vademecum />
      <Activos />
      <Contact />
      <Signature />
    </div>
  );
};

export default App;
