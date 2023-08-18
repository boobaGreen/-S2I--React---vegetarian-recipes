import { useMediaQuery } from "react-responsive";

import FilterSection from "./FilterSection";
import Search from "./Search";
import Stats from "./Stats";

import { principalDiv } from "../styles/styledComponents/styledOption";

function Option({ showFilter }) {
  const isSm = useMediaQuery({
    query: "(max-width: 700px)",
  });
  return (
    <div style={principalDiv}>
      {!showFilter || !isSm ? <Search /> : null}
      {showFilter ? <FilterSection /> : null}
      <Stats />
    </div>
  );
}

export default Option;
