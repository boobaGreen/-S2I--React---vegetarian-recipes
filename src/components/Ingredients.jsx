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

function Ingredients({ extendedIngredients }) {
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  const uniqueIngredients = getUniqueListBy(extendedIngredients, "id");

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
          <p>
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
