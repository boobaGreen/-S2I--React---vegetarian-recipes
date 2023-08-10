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
        padding: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        borderRadius: "5rem",
        backgroundImage: "url(/paper.jpg",
        width: "max-content",
      }}
    >
      <Heading
        as="h1"
        style={{ marginBottom: "2rem", fontSize: "4rem", color: "#184d19" }}
      >
        📌 Ingredients
      </Heading>
      {uniqueIngredients.map((ingredient) => (
        <div key={ingredient.id}>
          <p>
            <span>
              <TbPoint color="#184d19" />
            </span>
            <span style={{ marginLeft: "10px", color: "#184d19" }}>
              {ingredient.original}
            </span>
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
