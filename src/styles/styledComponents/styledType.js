import { styled } from "styled-components";

export const StyledSpan = styled.span`
  color: var(--color-my-plate);
  font-size: 6rem;
`;
export const styledHeader = {
  marginBottom: "2rem",
  fontSize: "4rem",
  color: "var(--color-green-fix)",
};

export const styledHeaderMini = {
  marginBottom: "1rem",
  fontSize: "3.2rem",
  color: "var(--color-green-fix)",
};

export const principalDiv = {
  backgroundImage: "url(/paper.jpg)",
  borderRadius: "4rem",
  padding: "2rem",
  border: "solid 0.5rem var(--color-my-back)",
  width: "70%",
  marginLeft: "2rem",
  marginRight: "2rem",
};

export const divSecondary = {
  display: "flex",
  flexDirection: "row",
  height: "min-content",
  width: "100%",
  flexWrap: "wrap",
  paddingTop: "1rem",
  paddingBottom: "2rem",
};

export const buttonStyle = {
  border: "solid 5px  var(--color-my-plate)",
  color: "var(--color-my-plate)",
  backgroundColor: "var(--color-my-back)",
  backgroundImage: "url(/wood.webp)",
  borderRadius: "40px",
  padding: "3px 6px",
  marginRight: "1rem",
  marginBottom: "1rem",
  height: "min-content",
  disabled: "true",
  cursor: "auto",
};
