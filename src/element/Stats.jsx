import Select from "react-select";
import { styled } from "styled-components";
import { useQueryCust } from "../contexts/QueryContext";
import { useRecipes } from "../feautures/recipes/UseRecipes";

import Row from "../ui/Row";

const options = [
  { value: 6, label: "6" },
  { value: 12, label: "12" },
  { value: 24, label: "24" },
  { value: 48, label: "48" },
  { value: 96, label: "96" },
];
const ButtonStyled = styled.button`
  border-radius: 100px;
  color: var(--color-grey-700);
  background-color: var(--color-grey-100);
  font-size: 1.2rem;
  margin-top: 2rem;
  cursor: auto;
  padding: 0.5rem;
`;

function Stats() {
  const {
    dispatch,
    search,
    diet,
    intolerances,
    type,
    number,
    offset,
    maxReadyTime,
  } = useQueryCust();

  const {
    isLoading,
    recipes: data,
    error,
  } = useRecipes(
    search,
    diet,
    intolerances,
    type,
    number,
    offset,
    maxReadyTime
  );
  if (isLoading) return null;
  if (error) return null;
  const totResultsLast = data.totalResults;

  let page = Math.trunc(offset / number) + 1;
  let pages = 1;
  if (Math.trunc(totResultsLast / number) > 1) {
    pages = Math.trunc(totResultsLast / number);
  }

  let nextPageExist = false;
  let prevPageExist = false;

  if (offset + number + 1 < totResultsLast) {
    nextPageExist = true;
  }
  if (number - offset <= 0) {
    prevPageExist = true;
  }
  function onNextPage() {
    dispatch({ type: "page/next" });
  }
  function onPrevPage() {
    dispatch({ type: "page/prev" });
  }
  const handleChange = (selectedOption) => {
    dispatch({
      type: "filter/number",
      payload: selectedOption.value,
    });

    console.log(`Option selected:`, selectedOption);
  };
  return (
    <>
      <Select
        onChange={handleChange}
        autoFocus={true}
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[1]}
        isDisabled={false}
        isLoading={false}
        isClearable={false}
        isRtl={false}
        isSearchable={false}
        name="Result per page"
        options={options}
      />
      <Row
        type="horizotal"
        style={{ justifyContent: "space-evenly", width: "100%" }}
      >
        {prevPageExist ? (
          <ButtonStyled style={{ cursor: "pointer" }} onClick={onPrevPage}>
            Prev Page
          </ButtonStyled>
        ) : null}

        <ButtonStyled disabled>
          {totResultsLast > 0 ? (
            <span>
              Page :{page} of {pages}
            </span>
          ) : (
            <span>🍃 No match for request...</span>
          )}
        </ButtonStyled>

        {nextPageExist ? (
          <ButtonStyled style={{ cursor: "pointer" }} onClick={onNextPage}>
            Next Page
          </ButtonStyled>
        ) : null}
      </Row>
    </>
  );
}

export default Stats;
