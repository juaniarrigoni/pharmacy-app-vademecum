// Import dependencies
import { FC, useState, useEffect } from "react";

// Import inner components
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";
import ProductModal from "./components/ProductModal";
import RequestDataModal from "./components/RequestDataModal";

// Import styled components
import { Container, List } from "./styled";

// Import external components
import Loader from "components/general/Loader";

// Import assets
import type { CategoryData } from "assets/types";
import { path, spreadsheetIds } from "assets/constants/contact";

const Vademecum: FC = () => {
  const [data, setData] = useState<Array<CategoryData>>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("Nombre pendiente");
  const [formula, setFormula] = useState("Fórmula pendiente");
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [openRequestDataModal, setOpenRequestDataModal] = useState(false);

  useEffect(() => {
    const url = `${path}/${spreadsheetIds.vademecum}/gviz/tq?tqx=out:json`;
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        const json = JSON.parse(text.substr(47).slice(0, -2));
        return json.table.rows.slice(1).map((row) => row.c[0].v);
      })
      .then((sheetsNames: Array<string>) => {
        sheetsNames.forEach((sheetName) => {
          fetch(`${url}&sheet=${sheetName}`)
            .then((response) => response.text())
            .then((text) => {
              const sheetData = JSON.parse(text.substr(47).slice(0, -2))
                .table.rows.slice(1)
                .map((row) => row.c);
              return sheetData.map((product) => ({
                name: product[0]?.v,
                formula: product[1]?.v,
              }));
            })
            .then((productsList) => {
              setData((previousState) => [
                ...previousState,
                {
                  name: sheetName,
                  products: productsList,
                },
              ]);
              setLoading(false);
            });
        });
      });
  }, []);

  const openModal = (
    event: React.SyntheticEvent<HTMLElement>,
    open: boolean
  ) => {
    if (open) {
      event.currentTarget as HTMLElement;
      setModal(true);
      setName(event.currentTarget?.dataset.name || "");
      setFormula(event.currentTarget?.dataset.formula || "");
    } else {
      setModal(false);
      setName("Nombre pendiente");
      setFormula("Fórmula pendiente");
    }
  };

  return (
    <Container id="Vademecum">
      <h2>Vademécum</h2>
      <h3>Nuestras fórmulas</h3>
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
        name={name}
        formula={formula}
        modal={modal}
        openModal={openModal}
        setOpenRequestDataModal={setOpenRequestDataModal}
        username={username}
      />
      <RequestDataModal
        state={openRequestDataModal}
        setOpenRequestDataModal={setOpenRequestDataModal}
        username={username}
        setUsername={setUsername}
      />
    </Container>
  );
};

export default Vademecum;
