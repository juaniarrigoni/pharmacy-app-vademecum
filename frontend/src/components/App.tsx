// Import dependencies
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import inner components
import Landing from "./pages/Landing";
import ProductPage from "./pages/Product";
import AuthModal from "./layouts/AuthModal";
import AccountSidebar from "./layouts/AccountSidebar";

// Import styled components
import { Container } from "./styled";

// Import assets
import store from "assets/store";
import { AuthProvider } from "contexts/AuthContext";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Container id="App">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/:sectionId/:productId" element={<ProductPage />} />
            </Routes>
            {/* <ChatBot /> Temporalmente desactivado */}
            <AuthModal />
            <AccountSidebar />
          </Container>
        </Router>
      </AuthProvider>
    </Provider>
  );
};

export default App;
