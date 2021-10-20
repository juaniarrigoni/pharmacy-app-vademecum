// Import dependencies
import { useState, useEffect } from "react";

// Import styled components
import { Container, List, ActivoText, ActivoButton } from "./styled";

// Import external components
import Loader from "components/general/Loader";

// Import assets
import { path, spreadsheetIds } from "assets/constants/contact";
import type { ActivoData } from "assets/types";

const Activos: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${path}/${spreadsheetIds.activos}/gviz/tq?tqx=out:json`;
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        const json = JSON.parse(text.substr(47).slice(0, -2));
        setData(
          json.table.rows.slice(1).map((row) => ({
            nombre: row.c[0].v,
            link: row.c[1]?.v,
          }))
        );
        setLoading(false);
      });
  }, []);

  const content: Array<JSX.Element> = data.map((item: ActivoData) => {
    return item.link ? (
      <ActivoButton
        key={item.nombre.replace(/\s+/g, "-")}
        id={item.nombre.replace(/\s+/g, "-")}
        href={item.link}
        target="_blank"
        rel="noreferrer"
      >
        {item.nombre}
      </ActivoButton>
    ) : (
      <ActivoText
        key={item.nombre.replace(/\s+/g, "-")}
        id={item.nombre.replace(/\s+/g, "-")}
      >
        {item.nombre}
      </ActivoText>
    );
  });

  return (
    <Container id="Activos">
      <h2>Activos</h2>
      <h3>Nuestros activos</h3>
      {loading ? <Loader /> : <List>{content}</List>}
    </Container>
  );
};

export default Activos;
