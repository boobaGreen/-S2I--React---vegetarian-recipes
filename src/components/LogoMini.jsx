import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  padding: 1rem;
  height: 7rem;
  width: 7rem;
`;

const Img = styled.img``;
// logo for desktop ( logo mini for mobile )
function LogoMini() {
  return (
    <Link to={`/`}>
      <StyledLogo>
        <Img src="/logo-light.png" alt="Logo" />
      </StyledLogo>
    </Link>
  );
}

export default LogoMini;
