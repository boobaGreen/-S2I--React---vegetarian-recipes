import Heading from "../ui/Heading";
function Type({ dishTypes }) {
  let dishTypeExists = false;
  if (dishTypes.length > 0) {
    dishTypeExists = true;
  }
  if (!dishTypeExists) return null;
  return (
    <>
      <Heading style={{ fontSize: "6rem" }}>🍽</Heading>
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
