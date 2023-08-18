import { styled } from "styled-components";
import { devices } from "../../const/constants";

export const StyledFilterSectionMain = styled.div`
  margin-top: 1rem;
  margin-left: 3rem;
  border: solid 1rem var(--color-my-back);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${devices.md} {
    flex-direction: row;
  }
`;
export const StyledFilterSectionSub = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
