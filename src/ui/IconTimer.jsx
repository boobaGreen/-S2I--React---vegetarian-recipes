import { styled } from "styled-components";

const Svg = styled.svg`
  background-color: transparent;
`;

function IconTimer({ dim }) {
  return (
    <Svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height={dim}
      width={dim}
      stroke="#184d19"
    >
      <path
        d="M12 12.746 4.404 2.534"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 3.731A9.5 9.5 0 1 1 3.92 7.746"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 3.254a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0Z"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default IconTimer;
