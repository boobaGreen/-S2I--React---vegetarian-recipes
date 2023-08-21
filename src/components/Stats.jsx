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
  // useQueryCust (context api) and useRecipes (react quuery) are two custom hook to manage filter and search bar data
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
  if (isLoading) return null; // no return spinner because there are already a spinner in search main div , with the same "time"
  if (error) return null;
  const totResultsLast = data.totalResults;

  // calculate the total page and actual page to display in UI
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
  // Custom query useQueryCust()/dispatch mantain the actual pagge update with ReactQuery Context (contexts/QueryContext.jsx)
  function onNextPage() {
    dispatch({ type: "page/next" });
  }
  function onPrevPage() {
    dispatch({ type: "page/prev" });
  }
  // ButtonNoClickStyled is use for mantain space in html page

  // If a button is hidden in UI , i prefer to set on hidden but consider the space for maintain the distance betwwen htm element
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
