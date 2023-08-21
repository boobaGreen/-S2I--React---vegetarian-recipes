import Heading from "../ui/Heading";

import { principalDiv } from "../styles/styledComponents/styledWine";

function Wine({ pairingText }) {
  // if there are some wine suggestion display theme ,else retutn NULL
  if (!pairingText) return null;
  return pairingText ? (
    <div style={principalDiv}>
      <Heading style={{ fontSize: "4rem" }}>🍷 Wine</Heading>
      <div style={{ padding: "3rem", color: "var(--color-green-fix)" }}>
        {pairingText}
      </div>
    </div>
  ) : null;
}

export default Wine;
