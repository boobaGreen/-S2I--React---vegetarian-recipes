import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useMediaQuery } from "react-responsive";
import LogoMini from "./LogoMini";

const StyledSidebar = styled.aside`
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2.4rem;
  gap: 3.2rem;
`;
const StyledLogoEmpty = styled.div`
  min-height: 12rem;
`;

function Sidebar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  console.log(isDesktopOrLaptop);
  return (
    <StyledSidebar>
      {isDesktopOrLaptop ? <Logo /> : <LogoMini />}
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
