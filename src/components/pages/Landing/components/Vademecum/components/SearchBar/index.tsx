// Import dependencies
import type { FC } from "react";

// Import styled components
import { Container, Form, Input } from "./styled";

const SearchBar: FC<{
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}> = ({ search, setSearch }) => {
  return (
    <Container id="SearchBar">
      <Form>
        <Input
          type="text"
          placeholder="Buscar un producto"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Form>
    </Container>
  );
};

export default SearchBar;
