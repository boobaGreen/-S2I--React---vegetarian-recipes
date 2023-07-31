import { styled } from "styled-components";
import { useQueryCust } from "../contexts/QueryContext";
import { useRecipes } from "../feautures/recipes/UseRecipes";
import Error from "../pages/Error";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";

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
  const { dispatch, search, diet, intolerances, type, number, offset, viewed } =
    useQueryCust();

  const {
    isLoading,
    recipes: data,
    error,
  } = useRecipes(search, diet, intolerances, type, number, offset);
  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  const totResultsLast = data.totalResults;

  let page = Math.trunc(offset / number);
  let nextPageExist = false;
  let prevPageExist = false;

  if (offset + number < totResultsLast) {
    nextPageExist = true;
  }
  if (number - offset < 0) {
    prevPageExist = true;
  }
  function onNextPage() {
    dispatch({ type: "page/next" });
  }
  function onPrevPage() {
    dispatch({ type: "page/prev" });
  }
  return (
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
        Page :{page} of {Math.trunc(totResultsLast / number)}
      </ButtonStyled>

      {nextPageExist ? (
        <ButtonStyled style={{ cursor: "pointer" }} onClick={onNextPage}>
          Next Page
        </ButtonStyled>
      ) : null}
    </Row>
  );
}

export default Stats;
