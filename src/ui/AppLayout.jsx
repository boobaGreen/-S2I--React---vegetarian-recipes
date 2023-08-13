import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../element/Sidebar";
import Header from "../element/Header";
import { devices } from "../const/constants";

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
  /* padding: 4rem 4.8rem 6.4rem; */
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* gap: 3.2rem; */
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
