// Import dependencies
import { useState, useEffect } from "react";

// Import inner components
import SearchBar from "../Vademecum/components/SearchBar";
import Category from "../Vademecum/components/Category";

// Import styled components
import { Container, List } from "../Vademecum/styled";

// Import external components
import Loader from "components/general/Loader";
import ProductModal from "components/layouts/ProductModal";

// Import assets
import { emptyProductData } from "assets/utils";
import { fetchCategories, fetchAllCategories } from "services/sheetsService";
import type { CategoryData, ProductData } from "assets/types";
import type { SectionConfig } from "assets/constants/sections";

interface ProductSectionProps {
  sectionConfig: SectionConfig;
}

const ProductSection: React.FC<ProductSectionProps> = ({ sectionConfig }) => {
  const [data, setData] = useState<Array<CategoryData>>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [openProductModal, setOpenProductModal] = useState(false);
  const [productModal, setProductModal] = useState(emptyProductData);

  useEffect(() => {
    const fetch = sectionConfig.categories && sectionConfig.categories.length > 0
      ? fetchCategories(sectionConfig.categories)
      : fetchAllCategories();

    fetch
      .then((categories) => {
        setData(categories.filter((c) => c.products.length > 0));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [sectionConfig]);

  const openModal = (event: React.SyntheticEvent<HTMLElement>) => {
    const productModalData: ProductData = {
      id:           event.currentTarget?.dataset.id || "-",
      nombre:       event.currentTarget?.dataset.nombre || "-",
      presentacion: event.currentTarget?.dataset.presentacion || "-",
      formula:      event.currentTarget?.dataset.formula || "-",
      descripcion:  event.currentTarget?.dataset.descripcion || "-",
      modoDeUso:    event.currentTarget?.dataset.mododeuso || "-",
      precio:       event.currentTarget?.dataset.precio || "-",
    };
    setProductModal(productModalData);
    setOpenProductModal(true);
  };

  return (
    <Container id={sectionConfig.id}>
      <h2>{sectionConfig.title}</h2>
      <h3>{sectionConfig.subtitle}</h3>
      <SearchBar search={search} setSearch={setSearch} />
      {loading ? (
        <Loader />
      ) : (
        <List>
          {data.map((category) => (
            <Category
              key={category.name}
              category={category.name}
              products={category.products}
              openModal={openModal}
              search={search}
            />
          ))}
        </List>
      )}
      <ProductModal
        product={productModal}
        open={openProductModal}
        setOpen={setOpenProductModal}
        sectionId={sectionConfig.id}
      />
    </Container>
  );
};

export default ProductSection;
