// Import styled components
import { Container, LoaderContent } from "./styled";

const Loader: React.FC<{ className?: string }> = ({ className }) => (
  <Container>
    <LoaderContent className={className}>
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
