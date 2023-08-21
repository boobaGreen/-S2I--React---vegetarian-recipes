import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import {
  styledAppLayout as StyledAppLayout,
  styledContainer as Container,
  styledMain as Main,
} from "../styles/styledComponents/styledAppLayout";
import { useDarkMode } from "../contexts/DarkModeContext";
// custom hook for theme

function AppLayout() {
  const { isDarkMode } = useDarkMode();
  let styleBackground = {};
  isDarkMode
    ? (styleBackground = {
        backgroundImage: "url(/blue.jpeg)",
        height: "180vh",
      })
    : (styleBackground = {
        backgroundImage: "url(/wallLight.webp)",
        height: "180vh",
      });
  // Outlet changing with react router , Header and Sidebar remain fix in the primcipal AppLayout
  return (
    <StyledAppLayout style={styleBackground}>
      <Header />
      <Sidebar />
      <Main style={{ marginTop: "2rem", overflow: "auto" }}>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
