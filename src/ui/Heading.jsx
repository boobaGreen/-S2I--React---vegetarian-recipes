import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      @media (min-width: 1024px) {
        font-size: 3.5rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 1.6rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.3rem;
      font-weight: 500;
    `}
    
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.2rem;
      font-weight: 800;
    `}
    
  line-height: 1.4;
  color: var(--color-brand-700);
  text-align: center;
`;

export default Heading;
