import Heading from "../ui/Heading";

import { principalDiv } from "../styles/styledComponents/styledWine";

function Wine({ pairingText }) {
  if (!pairingText) return null;
  return pairingText ? (
    <div style={principalDiv}>
      <Heading style={{ fontSize: "4rem" }}>🍷 Wine</Heading>
      <div style={{ padding: "3rem", color: "#184d19" }}>{pairingText}</div>
    </div>
  ) : null;
}

export default Wine;
