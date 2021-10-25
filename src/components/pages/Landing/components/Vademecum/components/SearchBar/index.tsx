// Import dependencies
import { FC, useState } from "react";

// Import styled components
import { Container, Input } from "./styled";

// Import external components
import Icon from "components/general/Icons/Search";

const SearchBar: FC<{
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}> = ({ search, setSearch }) => {
  const [activeInput, setActiveInput] = useState(false);
  return (
    <Container id="SearchBar" data-active-input={activeInput}>
      <Input
        type="text"
        placeholder="Buscar un producto"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onMouseOver={() => setActiveInput(true)}
        onMouseOut={() => setActiveInput(false)}
        onActive={() => setActiveInput(true)}
      />
      <Icon />
    </Container>
  );
};

export default SearchBar;
