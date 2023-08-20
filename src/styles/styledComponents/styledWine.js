import { styled } from "styled-components";

export const principalDiv = {
  backgroundImage: "url(/paper.jpg)",
  borderRadius: "4rem",
  padding: "2rem",
  border: "solid 0.5rem var(--color-my-back)",

  width: "95%",
};

export const styledWinePhoto = {
  backgroundImage: "url(/paper.jpg)",
  backgroundSize: "cover",
  borderRadius: "4rem",
  padding: "2rem",
  height: "100%",
  width: "95%",
  border: "solid 0.5rem var(--color-my-back)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export const DivWine = styled.div`
  margin-top: 2.5rem;
  min-width: "95%";
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  min-height: 20rem;
  border-radius: 20px;
`;
