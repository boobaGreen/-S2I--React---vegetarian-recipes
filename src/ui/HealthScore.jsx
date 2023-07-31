import { styled } from "styled-components";
import PieChart from "./PieChart";
const StyledHealthScore = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  /* padding-left: 5%;
  padding-top: 26%; */
  width: 100%;
`;
function HealthScore({ healthScore }) {
  return (
    <StyledHealthScore style={{ position: "relative" }}>
      {/* <Heading as="h4" style={{ marginBottom: "5px", position: "relative" }}>
        HS
      </Heading> */}
      <PieChart healthScore={healthScore}></PieChart>
    </StyledHealthScore>
  );
}

export default HealthScore;
