import { useMediaQuery } from "react-responsive";

import {
  styledHeaderMini,
  styledHeader,
  StyledSpan,
  principalDiv,
  divSecondary,
  buttonStyle,
} from "../styles/styledComponents/styledType";

import Heading from "../ui/Heading";

function Type({ dishTypes }) {
  const isLittle = useMediaQuery({
    query: "screen and (max-width: 700px)",
  });
  let dishTypeExists = false;
  const styleIf = isLittle ? styledHeaderMini : styledHeader;
  if (dishTypes.length > 0) {
    dishTypeExists = true;
  }
  if (!dishTypeExists) return null;
  return (
    <div style={principalDiv}>
      <Heading as="h1" style={styleIf}>
        <StyledSpan>🍽</StyledSpan> Type
      </Heading>
      <div style={divSecondary}>
        {dishTypes.map((type, i) => (
          <button key={i} style={buttonStyle}>
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Type;
