import { TbPoint } from "react-icons/tb";
import Heading from "../ui/Heading";
import { devices } from "../const/constants";
import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const StyledIngredients = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 5rem;
  background-image: url("/paper.jpg");
  max-width: 80%;
  border: solid 0.5rem var(--color-my-700);
  margin-left: 2rem;
  margin-right: 2rem;
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
    color: "#184d19",
  };

  const styledHeaderMini = {
    marginBottom: "1rem",
    fontSize: "3.2rem",
    color: "#184d19",
  };
  const isLittle = useMediaQuery({
    query: "screen and (max-width: 700px)",
  });
  const styleIf = isLittle ? styledHeaderMini : styleHeader;
  return (
    <StyledIngredients>
      <Heading as="h1" style={styleIf}>
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
    </StyledIngredients>
  );
}

export default Ingredients;
