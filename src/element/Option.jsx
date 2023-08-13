import FilterSection from "./FilterSection";
import Search from "./Search";
import Stats from "./Stats";
import { useMediaQuery } from "react-responsive";

function Option({ showFilter }) {
  const isSm = useMediaQuery({
    query: "(max-width: 700px)",
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!showFilter || !isSm ? <Search /> : null}
      {showFilter ? <FilterSection /> : null}
      <Stats />
    </div>
  );
}

export default Option;
