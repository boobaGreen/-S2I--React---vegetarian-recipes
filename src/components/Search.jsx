import { useQueryCust } from "../contexts/QueryContext";
import { useMediaQuery } from "react-responsive";

import { StyledSearch } from "../styles/styledComponents/styledSearch";

function Search() {
  const isSm = useMediaQuery({
    query: "(max-width: 700px)",
  });
  const isMd = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const { dispatch, search } = useQueryCust();

  const place = isSm
    ? "Search..."
    : isMd
    ? "Search ingredients..."
    : "Search ingredients,equipments,title...";

  return (
    <StyledSearch
      className="search"
      type="text"
      placeholder={place}
      value={search}
      onChange={(e) =>
        dispatch({ type: "search/update", payload: e.target.value })
      }
    />
  );
}

export default Search;
