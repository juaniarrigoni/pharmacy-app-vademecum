// Import dependencies
import { FC, useState, useEffect } from "react";
import axios from "axios";

// Import styled components
import { Container, List, ActivoText, ActivoButton } from "./styled";

// Import external components
import Loader from "components/general/Loader";

// Import assets
import { path, spreadsheetIds, parameters } from "assets/constants/contact";

interface IData {
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

  let content: JSX.Element[] = data.map((el: IData, idx: number) => {
    if (el.gsx$link.$t.indexOf("https://drive.google.com/") === -1) {
      return (
        <ActivoText key={idx} id={el.gsx$nombre.$t.replace(/\s+/g, "-")}>
          {el.gsx$nombre.$t}
        </ActivoText>
      );
    } else {
      return (
        <ActivoButton
          key={idx}
          id={el.gsx$nombre.$t.replace(/\s+/g, "-")}
          href={el.gsx$link.$t}
          target="_blank"
          rel="noreferrer"
        >
          {el.gsx$nombre.$t}
        </ActivoButton>
      );
    }
  });

  return (
    <Container id="Activos">
      <h2>Activos</h2>
      <h3>Calidad asegurada</h3>
      <Loader state={loading} />
      <List>{content}</List>
    </Container>
  );
};

export default Activos;
