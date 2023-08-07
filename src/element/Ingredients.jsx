import { TbPoint } from "react-icons/tb";
import Heading from "../ui/Heading";
function Ingredients({ extendedIngredients }) {
  // const unitShort = measures.metric.unitShort;
  // const amount = measures.metric.amount;

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  const uniqueIngredients = getUniqueListBy(extendedIngredients, "id");

  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <Heading style={{ marginBottom: "2rem" }}> 📌 Ingredients </Heading>
      {uniqueIngredients.map((ingredient) => (
        <div key={ingredient.id}>
          <p>
            <span>
              <TbPoint />
            </span>
            <span style={{ marginLeft: "10px" }}>{ingredient.original}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Ingredients;

// const aisle = ingredient.aisle;
// const amountDescr = ingredient.amount;
// const recipeId = ingredient.id;
// const recipeImage = ingredient.image;
// const original = ingredient.original;
// const unitShort = ingredient.measures.metric.unitShort;
// const amount = ingredient.measures.metric.amount;
