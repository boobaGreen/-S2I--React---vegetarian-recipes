import { styled } from "styled-components";

import { devices } from "../../const/constants";

const styledAppLayout = styled.div`
  /* background-image: url("/wallBirgo.jpg"); */
  display: grid;
  grid-template-columns: 8rem 1fr;
  grid-template-rows: auto 1fr;

  @media screen and (${devices.md}) {
    grid-template-columns: 20rem 1fr;
  }
`;

const styledContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const styledMain = styled.main`
  overflow: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export { styledAppLayout, styledContainer, styledMain };
