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
import { path, spreadsheetIds } from "assets/constants/contact";
import { emptyProductData } from "assets/utils";
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
        const url = `${path}/${spreadsheetIds.vademecum}/gviz/tq?tqx=out:json`;
        fetch(url)
            .then((response) => response.text())
            .then((text) => {
                const json = JSON.parse(text.substr(47).slice(0, -2));
                return json.table.rows.slice(1).map((row) => row.c[0].v);
            })
            .then((sheetsNames) => {
                // Filter only the categories that belong to this section
                const filteredSheets = sheetsNames.filter((sheetName: string) =>
                    sectionConfig.categories.includes(sheetName)
                );

                Promise.all(
                    filteredSheets.map((sheetName: string) => {
                        return fetch(`${url}&sheet=${sheetName}`)
                            .then((response) => response.text())
                            .then((text) =>
                                JSON.parse(text.substr(47).slice(0, -2))
                                    .table.rows.slice(1)
                                    .map((row) => row.c)
                            )
                            .then((sheetData) =>
                                sheetData.map((product) => ({
                                    nombre: product[0]?.v,
                                    presentacion: product[1]?.v,
                                    formula: product[2]?.v,
                                    descripcion: product[3]?.v,
                                    modoDeUso: product[4]?.v,
                                    precio: product[5]?.v,
                                }))
                            )
                            .then((productsList: ProductData) => ({
                                name: sheetName,
                                products: productsList,
                            }));
                    })
                ).then((newData) => {
                    setData(newData as Array<CategoryData>);
                    setLoading(false);
                });
            });
    }, [sectionConfig]);

    const openModal = (event: React.SyntheticEvent<HTMLElement>) => {
        event.currentTarget as HTMLElement;
        const productModalData: ProductData = {
            nombre: event.currentTarget?.dataset.nombre || "-",
            presentacion: event.currentTarget?.dataset.presentacion || "-",
            formula: event.currentTarget?.dataset.formula || "-",
            descripcion: event.currentTarget?.dataset.descripcion || "-",
            modoDeUso: event.currentTarget?.dataset.mododeuso || "-",
            precio: event.currentTarget?.dataset.precio || "-",
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
            />
        </Container>
    );
};

export default ProductSection;
