import { styled } from "styled-components";

const Svg = styled.svg`
  background-color: transparent;
`;

function IconMoney() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={42}
      width={42}
      stroke="#059669"
    >
      <defs />
      <path
        d="M16.941 4.155h-1.668a1.1 1.1 0 0 0-.409 2.123l1.693.677a1.1 1.1 0 0 1-.409 2.122H14.48"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.711 4.155V2.963"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.711 10.141V9.077"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.071 6.616a5.64 5.64 0 1 0 11.28 0 5.64 5.64 0 1 0-11.28 0"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1 14.024h3s.5 0 .5.5v7s0 .5-.5.5H1s-.5 0-.5-.5v-7s0-.5.5-.5"
      />
      <path
        d="M4.5 20.586c4.5 1.5 6.425 2.438 8.1 2.438 2.4 0 4.035-1.507 10.9-4.938a2.762 2.762 0 0 0-3-1l-4.316 1.367"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 15.024h3c2.353 0 4 2 4.5 2h3.5c1 0 1 2 0 2H10"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default IconMoney;
