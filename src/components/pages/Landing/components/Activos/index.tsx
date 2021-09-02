// Import dependencies
import { FC, useState, useEffect } from "react";
import axios from "axios";

// Import external components
import Loader from "components/general/Loader";

// Import styled components
import { Container, List, ActivoText, ActivoButton } from "./styled";

const Activos: FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let spreadsheetID = "1S0mXgKbdX8EPRkXEf7PKx8W63AoHTG5boDY-Ii2ke7c";
    let url = `https://spreadsheets.google.com/feeds/list/${spreadsheetID}/1/public/values?alt=json`;
    axios.get(url).then((response) => {
      setData(response.data.feed.entry);
      setLoading(false);
    });
  }, []);

  interface IData {
    gsx$link: {
      $t: string;
    };
    gsx$nombre: {
      $t: string;
    };
  }

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
