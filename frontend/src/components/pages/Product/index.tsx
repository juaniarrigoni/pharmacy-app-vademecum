import { useParams, useNavigate } from 'react-router-dom';
import { Container } from './styled';

const ProductPage: React.FC = () => {
    const { sectionId, productId } = useParams<'sectionId' | 'productId'>();
    const navigate = useNavigate();

    return (
        <Container>
            <h1>Product Detail: {productId}</h1>
            <h2>Section: {sectionId}</h2>
            <button onClick={() => navigate('/')}>Volver al inicio</button>
        </Container>
    );
};

export default ProductPage;
