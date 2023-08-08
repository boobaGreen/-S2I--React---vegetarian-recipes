import Row from "../ui/Row";
import FilterSection from "./FilterSection";
import Search from "./Search";
import Stats from "./Stats";

function Option({ showFilter }) {
  return (
    <Row>
      <Search />
      {showFilter ? <FilterSection /> : null}
      <Stats />
    </Row>
  );
}

export default Option;
