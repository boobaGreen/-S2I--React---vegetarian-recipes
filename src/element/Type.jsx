import { styled } from "styled-components";
import Heading from "../ui/Heading";
const StyledSpan = styled.span`
  color: var(--color-my-plate);
  font-size: 6rem;
`;
function Type({ dishTypes }) {
  let dishTypeExists = false;
  if (dishTypes.length > 0) {
    dishTypeExists = true;
  }
  if (!dishTypeExists) return null;
  return (
    <div
      style={{
        backgroundImage: "url(/paper.jpg)",
        borderRadius: "4rem",
        padding: "2rem",
      }}
    >
      <Heading as="h1" style={{ fontSize: "4rem", color: "#184d19" }}>
        <StyledSpan>🍽</StyledSpan> Type
      </Heading>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "min-content",
          width: "100%",
          flexWrap: "wrap",
          paddingTop: "1rem",
          paddingBottom: "2rem",
        }}
      >
        {dishTypes.map((type, i) => (
          <button
            key={i}
            style={{
              border: "solid 5px  #fcf6b9",
              color: "#fcf6b9",
              backgroundColor: "transparent",
              backgroundImage: "url(/wood.webp)",
              borderRadius: "40px",
              padding: "3px 6px",
              marginRight: "1rem",
              marginBottom: "1rem",
              height: "min-content",
              disabled: "true",
              cursor: "auto",
            }}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Type;
