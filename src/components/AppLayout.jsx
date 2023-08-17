import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../const/constants";
import Sidebar from "./Sidebar";
import Header from "./Header";

const StyledAppLayout = styled.div`
  background-image: url("/wallBirgo.jpg");
  display: grid;
  height: 100vh;
  grid-template-columns: 8rem 1fr;
  grid-template-rows: auto 1fr;

  @media screen and (${devices.md}) {
    grid-template-columns: 20rem 1fr;
  }
`;

const Main = styled.main`
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
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
