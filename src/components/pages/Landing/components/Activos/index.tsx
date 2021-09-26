// Import dependencies
import { FC, useState, useEffect } from "react";
import axios from "axios";

// Import styled components
import { Container, List, ActivoText, ActivoButton } from "./styled";

// Import external components
import Loader from "components/general/Loader";

// Import assets
import { path, spreadsheetIds, parameters } from "assets/constants/contact";

interface Data {
  gsx$link: {
    $t: string;
  };
  gsx$nombre: {
    $t: string;
  };
}

const Activos: FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${path}/${spreadsheetIds.activos}/1/${parameters}`;
    axios.get(url).then((response) => {
      setData(response.data.feed.entry);
      setLoading(false);
    });
  }, []);

  const content: Array<JSX.Element> = data.map((item: Data) => {
    if (item.gsx$link.$t.includes("https://drive.google.com/")) {
      return (
        <ActivoButton
          key={item.gsx$nombre.$t.replace(/\s+/g, "-")}
          id={item.gsx$nombre.$t.replace(/\s+/g, "-")}
          href={item.gsx$link.$t}
          target="_blank"
          rel="noreferrer"
        >
          {item.gsx$nombre.$t}
        </ActivoButton>
      );
    }
    return (
      <ActivoText
        key={item.gsx$nombre.$t.replace(/\s+/g, "-")}
        id={item.gsx$nombre.$t.replace(/\s+/g, "-")}
      >
        {item.gsx$nombre.$t}
      </ActivoText>
    );
  });

  return (
    <Container id="Activos">
      <h2>Activos</h2>
      <h3>Calidad asegurada</h3>
      {loading ? <Loader /> : <List>{content}</List>}
    </Container>
  );
};

export default Activos;
