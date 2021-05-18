import { FC } from "react";

import style from "./styles/SearchBar.module.css";

const SearchBar: FC<{ search: string; setSearch: Function }> = ({
  search,
  setSearch,
}) => {
  return (
    <div id="SearchBar" className={style.SearchBar}>
      <form className={style.SearchBar__Box}>
        <input
          type="text"
          className={style.SearchBar__Box__Input}
          placeholder="Buscar un producto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
