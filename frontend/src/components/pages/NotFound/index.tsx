// Import styled components
import { Container, Code, Message, HomeLink } from "./styled";

const NotFound: React.FC = () => (
  <Container>
    <Code>404</Code>
    <Message>Página no encontrada</Message>
    <HomeLink href="/">Volver al inicio</HomeLink>
  </Container>
);

export default NotFound;
