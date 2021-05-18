import { FC, useState, useEffect } from "react";
import axios from "axios";
import dotenv from "dotenv";

import SearchBar from "./Vademecum/SearchBar";
import Loader from "./Loader";
import Category from "./Vademecum/Category";
import ProductModal from "./Vademecum/ProductModal";
import RequestData from "./Vademecum/RequestData";

import style from "./styles/Vademecum.module.css";

dotenv.config();

const Vademecum: FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("Nombre pendiente");
  const [formula, setFormula] = useState("Fórmula pendiente");
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [openRequestDataModal, setOpenRequestDataModal] = useState(false);

  useEffect(() => {
    const getData = (sheetNUM: number, data: any[]) => {
      const path = process.env.REACT_APP_GOOGLE_PATH;
      const spreadsheetID = process.env.REACT_APP_GOOGLE_SHEETID;
      const parameters = process.env.REACT_APP_GOOGLE_PARAMETERS;
      const url = `${path}/${spreadsheetID}/${sheetNUM}/${parameters}`;
      axios
        .get(url)
        .then((response) => {
          getData(++sheetNUM, data.concat(response.data.feed));
        })
        .catch(() => {
          setData(data);
          setLoading(false);
        });
    };
    getData(1, []);
  }, []);

  const openModal = (e, open: boolean) => {
    if (open) {
      e.currentTarget as HTMLElement;
      setModal(true);
      setName(e.currentTarget.dataset.name);
      setFormula(e.currentTarget.dataset.formula);
    } else {
      setModal(false);
      setName("Nombre pendiente");
      setFormula("Fórmula pendiente");
    }
  };

  let content: JSX.Element[] = data.map((el, idx) => {
    return (
      <Category
        key={idx}
        category={el.title.$t}
        data={el.entry}
        openModal={openModal}
        search={search}
      />
    );
  });

  return (
    <div id="Vademecum" className={style.Vademecum}>
      <h2>Vademécum</h2>
      <h3>Nuestras fórmulas</h3>
      <SearchBar search={search} setSearch={setSearch} />
      <Loader state={loading} />
      <div className={style.Vademecum__Flex}>{content}</div>
      <ProductModal
        name={name}
        formula={formula}
        modal={modal}
        openModal={openModal}
        setOpenRequestDataModal={setOpenRequestDataModal}
        username={username}
      />
      <RequestData
        state={openRequestDataModal}
        setOpenRequestDataModal={setOpenRequestDataModal}
        username={username}
        setUsername={setUsername}
      />
    </div>
  );
};

export default Vademecum;
