import styled from "styled-components";

import { devices } from "../../const/constants";

export const StyleNutry = styled.div`
  width: 95%;
  background-image: url("/paper.jpg");
  border-radius: 4rem;
  padding: 2rem;
  border: solid 0.5rem var(--color-my-back);
  @media (${devices.sm}) {
    width: 98.3%;
  }
`;

export const StyledGraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 90%;
  height: 90%;

  @media (min-width: 820px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    margin-left: auto;
  }
`;

export const styleHeader = {
  marginBottom: "2rem",
  fontSize: "4rem",
  color: "var(--color-green-fix)",
};

export const styledHeaderMini = {
  marginBottom: "1rem",
  fontSize: "3.2rem",
  color: "var(--color-green-fix)",
};
