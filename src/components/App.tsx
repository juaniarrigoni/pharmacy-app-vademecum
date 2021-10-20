// Import dependencies
import { Provider } from "react-redux";

// Import inner components
import Landing from "./pages/Landing";

// Import styled components
import { Container } from "./styled";

// Import assets
import store from "assets/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container id="App">
        <Landing />
      </Container>
    </Provider>
  );
};

export default App;
