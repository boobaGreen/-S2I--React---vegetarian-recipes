import { styled } from "styled-components";
import { useQueryCust } from "../contexts/QueryContext";
import { useRecipes } from "../feautures/recipes/UseRecipes";

import Row from "../ui/Row";

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
  console.log("tot results : ", totResultsLast);
  console.log("offset : ", offset);

  let page = Math.trunc(offset / number) + 1;
  console.log("page : ", page);
  let pages = 1;
  if (Math.trunc(totResultsLast / number) > 1) {
    pages = Math.trunc(totResultsLast / number) + 1;
  }
  console.log("pages : ", pages);
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

  return (
    <>
      {console.log(prevPageExist, " : prev ex page")}
      {console.log(nextPageExist, " : next ex page")}
      <Row
        type="horizotal"
        style={{ justifyContent: "space-evenly", width: "100%" }}
      >
        {prevPageExist ? (
          <ButtonStyled
            style={{
              cursor: "pointer",
              backgroundColor: "#A7F3D0",
              color: "#1f2937",
            }}
            onClick={onPrevPage}
          >
            Prev Page
          </ButtonStyled>
        ) : (
          <ButtonStyled style={{ cursor: "auto", visibility: "hidden" }}>
            Prev Page
          </ButtonStyled>
        )}

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
          <ButtonStyled
            style={{
              cursor: "pointer",
              backgroundColor: "#A7F3D0",
              color: "#1f2937",
            }}
            onClick={onNextPage}
          >
            Next Page
          </ButtonStyled>
        ) : (
          <ButtonStyled style={{ cursor: "auto", visibility: "hidden" }}>
            Next Page
          </ButtonStyled>
        )}
      </Row>
    </>
  );
}

export default Stats;
