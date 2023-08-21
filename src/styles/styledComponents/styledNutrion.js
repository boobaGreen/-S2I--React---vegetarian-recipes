import styled from "styled-components";

import { devices } from "../../const/constants";

export const StyleNutry = styled.div`
  overflow: hidden;
  width: 95%;
  background-image: url("/paper.jpg");
  border-radius: 4rem;

  border: solid 0.5rem var(--color-my-back);
  @media (${devices.sm}) {
    width: 98.3%;
  }
`;

export const StyledGraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 95%;
  width: 95%;
  margin: auto;
  margin-bottom: 2rem;

  @media (min-width: 820px) {
    flex-direction: row;
    align-items: center;
    width: 95%;
    height: 95%;
    justify-content: center;
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
