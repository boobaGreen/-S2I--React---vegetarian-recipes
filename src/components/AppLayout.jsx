import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import {
  styledAppLayout as StyledAppLayout,
  styledContainer as Container,
  styledMain as Main,
} from "../styles/styledComponents/styledAppLayout";
import { useDarkMode } from "../contexts/DarkModeContext";

function AppLayout() {
  const { isDarkMode } = useDarkMode();
  let styleBackground = {};
  isDarkMode
    ? (styleBackground = { backgroundImage: "url(/blue.jpeg)" })
    : (styleBackground = { backgroundImage: "url(/wallLight.webp)" });
  return (
    <StyledAppLayout style={styleBackground}>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
