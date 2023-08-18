import { useQueryCust } from "../contexts/QueryContext";
import { useRecipes } from "../hooks/useRecipes";

import {
  ButtonStyled,
  ButtonNoClickStyled,
  principalDiv,
} from "../styles/styledComponents/styledStats";

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
    pages = Math.trunc(totResultsLast / number) + 1;
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

  return (
    <div style={principalDiv}>
      {prevPageExist ? (
        <ButtonStyled onClick={onPrevPage}>Prev Page</ButtonStyled>
      ) : (
        <ButtonStyled style={{ cursor: "auto", visibility: "hidden" }}>
          Prev Page
        </ButtonStyled>
      )}
      <ButtonNoClickStyled disabled>
        {totResultsLast > 0 ? (
          <span>
            Page :{page} of {pages}
          </span>
        ) : (
          <span>🍃 No match for request...</span>
        )}
      </ButtonNoClickStyled>
      {nextPageExist ? (
        <ButtonStyled
          style={{
            cursor: "pointer",
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
    </div>
  );
}

export default Stats;
