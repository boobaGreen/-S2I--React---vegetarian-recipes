import Heading from "../ui/Heading";
function Wine({ pairingText }) {
  if (!pairingText) return null;
  return pairingText ? (
    <div
      style={{
        backgroundImage: "url(/paper.jpg)",
        borderRadius: "4rem",
        padding: "2rem",
      }}
    >
      <Heading style={{ fontSize: "4rem" }}>🍷 Wine</Heading>
      <div style={{ padding: "3rem" }}>{pairingText}</div>
    </div>
  ) : null;
}

export default Wine;
