import { useLocalStorageState } from "../hooks/useLocalStorageState";

import styled from "styled-components";

import Card from "../components/Card";
import FavPageNotFound from "./FavPageNotFound";

const StyledRecipeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

function FavouriteListPage() {
  const [favouriteList, setFavouriteList] = useLocalStorageState(
    [],
    "favouriteList"
  );

  const favListLength = favouriteList.length;

  function handleDeleteRecipe(idToDelete) {
    setFavouriteList((favouriteList) =>
      favouriteList.filter((recipe) => recipe.id !== idToDelete)
    );
  }

  return (
    <>
      {favListLength ? (
        <StyledRecipeList>
          {favouriteList.map((recipe) => (
            <Card
              recipe={recipe}
              key={recipe.id}
              favouriteList={favouriteList}
              handleDeleteRecipe={handleDeleteRecipe}
            />
          ))}
        </StyledRecipeList>
      ) : (
        <FavPageNotFound />
      )}
    </>
  );
}

export default FavouriteListPage;
