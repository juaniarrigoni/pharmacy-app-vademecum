// Import dependencies
import type { FC } from "react";

// Import inner components
import Landing from "./pages/Landing";

// Import styled components
import { Container } from "./styled";

const App: FC = () => {
  return (
    <Container>
      <Landing />
    </Container>
  );
};

export default App;
