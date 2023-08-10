import styled from "styled-components";

const StyledLogo = styled.div`
  /* background-image: url(/wallBirgo.jpg); */
  text-align: center;
  padding: 1rem;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo-dark.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
