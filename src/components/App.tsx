// Import dependencies
import { Provider } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ProductPage from "./pages/Product";

// Import styled components
import { Container } from "./styled";

// Import assets
import store from "assets/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Container id="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/:sectionId/:productId" element={<ProductPage />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
