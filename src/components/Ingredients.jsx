import { useMediaQuery } from "react-responsive";

import { TbPoint } from "react-icons/tb";

import Heading from "../ui/Heading";

import {
  StyledIngredients,
  styledHeaderMini,
  styleHeader,
  styledSpanMini,
  styledSpan,
} from "../styles/styledComponents/styledIngredients";

// delete similar ingridients frome the recipe ingredients list
function Ingredients({ extendedIngredients }) {
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  const uniqueIngredients = getUniqueListBy(extendedIngredients, "id");
  // media query section
  const isLittle = useMediaQuery({
    query: "screen and (max-width: 700px)",
  });
  const styleIf = isLittle ? styledHeaderMini : styleHeader;
  const styleIf2 = isLittle ? styledSpanMini : styledSpan;

  return (
    <StyledIngredients>
      <Heading as="h1" style={styleIf}>
        📌 Ingredients
      </Heading>
      {uniqueIngredients.map((ingredient) => (
        <div key={ingredient.id}>
          <p style={{ display: "flex", marginTop: "1.2rem" }}>
            <span>
              <TbPoint color="var(--color-green-fix)" />
            </span>
            <span style={styleIf2}>{ingredient.original}</span>
          </p>
        </div>
      ))}
    </StyledIngredients>
  );
}

export default Ingredients;
