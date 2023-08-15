import Heading from "../ui/Heading";
function Wine({ pairingText }) {
  if (!pairingText) return null;
  return pairingText ? (
    <div
      style={{
        backgroundImage: "url(/paper.jpg)",
        borderRadius: "4rem",
        padding: "2rem",
        border: "solid 0.5rem var(--color-my-back)",
        marginLeft: "2rem",
        width: "85%",
      }}
    >
      <Heading style={{ fontSize: "4rem" }}>🍷 Wine</Heading>
      <div style={{ padding: "3rem", color: "#184d19" }}>{pairingText}</div>
    </div>
  ) : null;
}

export default Wine;
