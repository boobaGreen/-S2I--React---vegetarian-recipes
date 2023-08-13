import Pie from "./Pie";
import Heading from "../ui/Heading";
import { useMediaQuery } from "react-responsive";
import { devices } from "../const/constants";
import { styled } from "styled-components";

function Nutrition({ dataPieNutrient, dataPieCalories }) {
  const isLittle = useMediaQuery({
    query: "screen and (max-width: 820px)",
  });
  const StyleNutry = styled.div`
    background-image: url("/paper.jpg");
    border-radius: 4rem;
    padding: 2rem;
    border: solid 0.5rem var(--color-my-700);
    width: 86%;
    margin: 0rem 2rem 2rem 2rem;
  `;
  const StyledGraph = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    @media (min-width: 820px) {
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 100%;
      justify-content: space-evenly;
      margin-left: auto;
    }
  `;
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
  const styleIf = isLittle ? styledHeaderMini : styleHeader;
  return (
    <StyleNutry>
      <Heading as="h1" style={styleIf}>
        🧪 Nutrition
      </Heading>
      <StyledGraph>
        <div style={{ width: "85%" }}>
          <Pie
            data={dataPieCalories}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div style={{ width: "85%" }}>
          <Pie
            data={dataPieNutrient}
            options={{ responsive: false, maintainAspectRatio: false }}
          />
        </div>
      </StyledGraph>
    </StyleNutry>
  );
}

export default Nutrition;
