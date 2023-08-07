import Heading from "../ui/Heading";
function Wine({ pairingText }) {
  return pairingText ? (
    <>
      <Heading style={{ fontSize: "4rem" }}>🍷 Wine</Heading>
      <div style={{ padding: "3rem" }}>{pairingText}</div>
    </>
  ) : null;
}

export default Wine;
