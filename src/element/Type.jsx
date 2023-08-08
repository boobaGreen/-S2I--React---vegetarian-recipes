import { styled } from "styled-components";
import Heading from "../ui/Heading";
const StyledSpan = styled.span`
  color: var(--color-grey-plate);
  font-size: 6rem;
`;
function Type({ dishTypes }) {
  let dishTypeExists = false;
  if (dishTypes.length > 0) {
    dishTypeExists = true;
  }
  if (!dishTypeExists) return null;
  return (
    <>
      <Heading as="h1">
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
              backgroundColor: "transparent",
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
    </>
  );
}

export default Type;
