// Import dependencies
import { FC, useState, useEffect } from "react";
import axios from "axios";

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
import type { SpreadsheetData } from "assets/types";
import { path, spreadsheetIds, parameters } from "assets/constants/contact";

const Vademecum: FC = () => {
  const [data, setData] = useState<Array<SpreadsheetData>>([]);
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
    const getData = (sheetId: number, reducer: Array<SpreadsheetData>) => {
      const url = `${path}/${spreadsheetIds.vademecum}/${sheetId}/${parameters}`;
      axios
        .get(url)
        .then((response) => {
          // eslint-disable-next-line no-param-reassign
          getData(++sheetId, reducer.concat(response.data.feed));
        })
        .catch(() => {
          setData(reducer);
          setLoading(false);
        });
    };
    getData(1, []);
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

  const content: Array<JSX.Element> = data.map((item) => {
    return (
      <Category
        key={item.title.$t}
        category={item.title.$t}
        data={item.entry}
        openModal={openModal}
        search={search}
      />
    );
  });

  return (
    <Container id="Vademecum">
      <h2>Vademécum</h2>
      <h3>Nuestras fórmulas</h3>
      <SearchBar search={search} setSearch={setSearch} />
      <Loader state={loading} />
      <List>{content}</List>
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
