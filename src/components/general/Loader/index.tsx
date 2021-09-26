// Import dependencies
import type { FC } from "react";

// Import styled components
import { Container, LoaderContent } from "./styled";

const Loader: FC = () => (
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

export default Loader;
