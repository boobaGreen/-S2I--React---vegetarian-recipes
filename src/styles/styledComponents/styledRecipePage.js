import { styled } from "styled-components";

import { devices } from "../../const/constants";

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-rows: 20rem auto min-content auto auto auto auto auto;
  grid-template-columns: 100%;
  grid-template-areas:
    /* "photo info" */
    "photo"
    "info"
    "type"
    "ingredients"
    "istructions"
    "wine"
    "winePhoto"
    "nutrition";

  text-align: center;
  grid-gap: 2rem;

  @media (${devices.sm}) {
    grid-template-rows: min-content auto min-content auto auto;
    grid-template-columns: 55% 1fr;
    grid-template-areas:
      "photo info"
      "ingredients type"
      "istructions istructions"
      "wine winePhoto"
      "nutrition nutrition";
    grid-gap: 5rem;
  }
`;

const StyledDivPhoto = styled.div`
  grid-area: photo;
  width: 25rem;
  background-repeat: no-repeat;

  background-size: cover;
  padding: 0.25rem;
  overflow: hidden;
  padding: 1rem;
  border-radius: 4rem;
  border: solid 0.5rem var(--color-my-back);
  width: 85%;
  margin-left: 2rem;
  margin-right: 2rem;
  @media (${devices.sm}) {
    width: 100%;
  }
`;
const StyledInfo = styled.div`
  grid-area: info;
  padding: 0.25rem;
`;
const StyledDivType = styled.div`
  grid-area: type;
  padding: 0.25rem;
`;
const StyledDivNutrion = styled.div`
  grid-area: nutrition;
  padding: 0.25rem;
`;
const StyledDivIngredients = styled.div`
  width: 100%;
  grid-area: ingredients;
  padding: 0.25rem;
  display: flex;
`;
const StyledDivIstructions = styled.div`
  grid-area: istructions;
  padding: 0.25rem;
`;

const StyledDivWinePhoto = styled.div`
  grid-area: winePhoto;
  padding: 0.25rem;
`;

const StyledDivWine = styled.div`
  grid-area: wine;
  padding: 0.25rem;
`;

export {
  StyledGridContainer,
  StyledDivPhoto,
  StyledInfo,
  StyledDivType,
  StyledDivNutrion,
  StyledDivIngredients,
  StyledDivIstructions,
  StyledDivWinePhoto,
  StyledDivWine,
};
