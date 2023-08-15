import { styled } from "styled-components";
import Heading from "../ui/Heading";
import { useMediaQuery } from "react-responsive";
const StyledSpan = styled.span`
  color: var(--color-my-plate);
  font-size: 6rem;
`;
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
function Type({ dishTypes }) {
  const isLittle = useMediaQuery({
    query: "screen and (max-width: 700px)",
  });
  let dishTypeExists = false;
  const styleIf = isLittle ? styledHeaderMini : styleHeader;
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
        border: "solid 0.5rem var(--color-my-back)",
        width: "80%",
        marginLeft: "2rem",
        marginRight: "2rem",
      }}
    >
      <Heading as="h1" style={styleIf}>
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
              border: "solid 5px  var(--color-my-back)",
              color: "var(--color-my-back)",
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
