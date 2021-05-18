import { FC } from "react";

import lenses from "../assets/Signature/Francisco.png";
import smile from "../assets/Signature/Arrigoni.png";

const style = require("./styles/Signature.module.css");

const Signature: FC = () => {
  return (
    <div id="Signature">
      <a
        href="http://franarrigoni.vercel.app"
        target="_blank"
        rel="noreferrer"
        className={style.Signature__Logo}
      >
        <p className={style.Signature__Logo__Text}>made by</p>
        <img
          className={style.Signature__Logo__Lenses}
          alt="lenses"
          src={lenses}
        />
        <img className={style.Signature__Logo__Smile} alt="smile" src={smile} />
      </a>
    </div>
  );
};

export default Signature;
