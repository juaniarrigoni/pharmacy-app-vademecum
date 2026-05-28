// Import dependencies
import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import inner components
import Landing from "./pages/Landing";
import ProductPage from "./pages/Product";
import NotFound from "./pages/NotFound";
import AuthModal from "./layouts/AuthModal";
import AccountSidebar from "./layouts/AccountSidebar";

// Import styled components
import { Container } from "./styled";

// Import assets
import store from "assets/store";
import { AuthProvider } from "contexts/AuthContext";

const ProductosRedirect: React.FC = () => {
  useEffect(() => {
    window.location.replace("https://powerfarm.ar");
  }, []);
  return null;
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Container id="App">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/productos" element={<ProductosRedirect />} />
              <Route path="/:sectionId/:productId" element={<ProductPage />} />
              <Route path="*" element={<NotFound />} />
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
