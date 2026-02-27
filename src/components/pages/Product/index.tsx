import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from './styled'; // Will create styled separately
import { ProductData } from 'assets/types';
// import { getProductBySlug } from 'assets/utils'; // Placeholder function

const ProductPage: React.FC = () => {
    const { sectionId, productId } = useParams<'sectionId' | 'productId'>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<ProductData | null>(null);

    useEffect(() => {
        // Here we will fetch product data based on productId (slug)
        // For now, simulated loading
        console.log(`Loading product: ${productId} from section: ${sectionId}`);
    }, [productId, sectionId]);

    return (
        <Container>
            <h1>Product Detail: {productId}</h1>
            <h2>Section: {sectionId}</h2>
            <button onClick={() => navigate('/')}>Volver al inicio</button>
        </Container>
    );
};

export default ProductPage;
