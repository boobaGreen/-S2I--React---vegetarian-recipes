// import { useRef } from "react";
// import { useKey } from "./hooks/useKey";
// import { useContext } from "react";
// import { QueryContext } from "../contexts/QueryContext";
import { useQueryCust } from "../contexts/QueryContext";
import { styled } from "styled-components";

const StyledSearch = styled.input`
  cursor: pointer;
  justify-self: center;
  border: solid 0.5rem white;
  padding: 1.1rem 1.6rem;
  font-size: 1.8rem;
  border-radius: 100px;
  width: 40rem;
  transition: all 0.3s;
  color: var(--color-pen-700);
  background-color: var(--color-my-700);
  &:focus {
    outline: none;
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

function Search() {
  const { dispatch, search } = useQueryCust();
  // const inputEl = useRef(null);

  // useKey("Enter", function () {
  //   if (document.activeElement === inputEl.current) return;
  //   inputEl.current.focus();
  //   setQuery("");
  // });

  return (
    <div>
      <StyledSearch
        className="search"
        type="text"
        placeholder="Search ingredient,equipment,title..."
        value={search}
        // value={search}
        onChange={(e) =>
          dispatch({ type: "search/update", payload: e.target.value })
        }
        // ref={inputEl}
      />
    </div>
  );
}

export default Search;
