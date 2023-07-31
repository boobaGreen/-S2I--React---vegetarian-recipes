import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: row;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      align-items: center;
      gap: 1.6rem;
    `}

  ${(props) =>
    props.justify === "center" &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.justify === "space-bt" &&
    css`
      justify-content: space-between;
    `}
    ${(props) =>
    props.justify === "space-ev" &&
    css`
      justify-content: space-evenly;
    `}
  ${(props) =>
    props.justify === "space-ar" &&
    css`
      justify-content: space-around;
    `}
    ${(props) =>
    props.justify === "start" &&
    css`
      justify-content: start;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
