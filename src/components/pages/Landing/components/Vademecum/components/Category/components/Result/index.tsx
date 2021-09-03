import type { FC } from "react";

import style from "./style.module.css";

const Result: FC<{ search: string; result: number | null }> = ({
  search,
  result,
}) => {
  if (search === "" || result === null) {
    return null;
  } else {
    return (
      <span id="Result" className={style.Result}>
        {result}
      </span>
    );
  }
};

export default Result;
