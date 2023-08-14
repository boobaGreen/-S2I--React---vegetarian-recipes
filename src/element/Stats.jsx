import { styled } from "styled-components";
import { useQueryCust } from "../contexts/QueryContext";
import { useRecipes } from "../feautures/useRecipes";

const ButtonStyled = styled.button`
  border-radius: 100px;
  color: var(--color-pen-700);
  background-color: var(--color-my-700);
  font-size: 1.2rem;
  margin-top: 2rem;
  cursor: auto;
  padding: 0.5rem;
  cursor: "pointer";

  &:hover {
    outline: none;
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    background-color: var(--color-nav-hover);
  }
`;
const ButtonNoClickStyled = styled.button`
  border-radius: 100px;
  color: #184d19;

  background-color: white;
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        gap: "1rem",
      }}
    >
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
