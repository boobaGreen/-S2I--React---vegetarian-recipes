import { styled } from "styled-components";
export const principalDiv = {
  backgroundImage: "url(/paper.jpg)",
  borderRadius: "4rem",
  padding: "2rem",
  border: "solid 0.5rem var(--color-my-back)",
  marginLeft: "2rem",
  width: "85%",
};

export const styledWinePhoto = {
  marginLeft: "2rem",
  backgroundImage: "url(/paper.jpg)",
  borderRadius: "4rem",
  padding: "2rem",
  height: "100%",
  width: "85%",
  border: "solid 0.5rem var(--color-my-back)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export const DivWine = styled.div`
  margin-top: 2.5rem;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  min-height: 20rem;
  border-radius: 20px;
`;
