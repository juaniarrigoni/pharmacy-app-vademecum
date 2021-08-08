import style from "./style.module.css";

import type { FC } from "react";

const Loader: FC<{ state: boolean }> = ({ state }) => {
  if (state) {
    return (
      <div id="Loader" className={style.Loader}>
        <div className={style.Loader__Content}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  } else return null;
};

export default Loader;
