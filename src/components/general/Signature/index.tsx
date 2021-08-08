import style from "./style.module.css";

import lenses from "./assets/Francisco.png";
import smile from "./assets/Arrigoni.png";

import type { FC } from "react";

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
