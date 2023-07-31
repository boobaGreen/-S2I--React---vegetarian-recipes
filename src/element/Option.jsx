import Row from "../ui/Row";
import FilterSection from "./FilterSection";
import Search from "./Search";
import Stats from "./Stats";

function Option() {
  return (
    <Row>
      <Search />
      <FilterSection />
      <Stats />
    </Row>
  );
}

export default Option;
