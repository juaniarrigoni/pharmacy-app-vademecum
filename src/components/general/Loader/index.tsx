// Import dependencies
import type { FC } from "react";

// Import styled components
import { Container, LoaderContent } from "./styled";

const Loader: FC<{ state: boolean }> = ({ state }) => {
  if (state) {
    return (
      <Container>
        <LoaderContent>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </LoaderContent>
      </Container>
    );
  } else return null;
};

export default Loader;
