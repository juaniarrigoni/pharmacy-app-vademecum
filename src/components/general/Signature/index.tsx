// Import dependencies
import type { FC } from "react";

// Import styled components
import { Container } from "./styled";

// Import assets
import lenses from "./assets/Francisco.png";
import smile from "./assets/Arrigoni.png";
import { developerWebsite } from "constants/contact";

const Signature: FC = () => {
  return (
    <Container>
      <a href={developerWebsite} target="_blank" rel="noreferrer">
        <p>made by</p>
        <img alt="Signature" src={lenses} />
        <img alt="Signature" src={smile} />
      </a>
    </Container>
  );
};

export default Signature;
