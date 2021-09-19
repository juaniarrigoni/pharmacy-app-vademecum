// Import dependencies
import type { FC } from "react";

// Import styled components
import { Container } from "./styled";

const Result: FC<{ search: string; result: number | null }> = ({
  search,
  result,
}) => {
  if (search === "" || result === null) return null;
  return <Container id="Result">{result}</Container>;
};

export default Result;
