import { useMediaQuery } from "react-responsive";

import { TbPoint } from "react-icons/tb";
import { styled } from "styled-components";

import { devices } from "../const/constants";
import Heading from "../ui/Heading";

const StyledIngredients = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 5rem;
  background-image: url("/paper.jpg");
  min-width: 88%;
  border: solid 0.5rem var(--color-my-back);
  margin-left: 2rem;
  margin-right: 6rem;
  @media (${devices.sm}) {
    width: 95%;
    max-width: 100%;
    margin-right: 2rem;
  }
`;
function Ingredients({ extendedIngredients }) {
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  const uniqueIngredients = getUniqueListBy(extendedIngredients, "id");

  const styleHeader = {
    marginBottom: "2rem",
    fontSize: "4rem",
    color: "var(--color-green-fix)",
  };

  const styledHeaderMini = {
    marginBottom: "1rem",
    fontSize: "3.2rem",
    color: "var(--color-green-fix)",
  };
  const styledSpanMini = {
    fontSize: "1.0rem",
    color: "var(--color-green-fix)",
  };
  const styledSpan = {
    fontSize: "1.8rem",
    color: "var(--color-green-fix)",
  };
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
