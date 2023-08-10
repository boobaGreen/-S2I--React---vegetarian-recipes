import { styled } from "styled-components";

const Svg = styled.svg`
  background-color: transparent;
`;

function IconVegan() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={48}
      width={48}
    >
      <defs />
      <path
        d="M19.972 4.031C11.761 8.378 9.829 22.867 9.829 22.867S8.4 4.432 1.1 1.133a69.659 69.659 0 0 0 8.729 21.734"
        fill="none"
        stroke="#184d19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9 12.433a6.465 6.465 0 0 1 .307-8.4c2.415-2.9 9.66-2.9 9.66-2.9s.421 5.217-1.932 8.694c-2.117 3.131-5.304 4.283-8.035 2.606Z"
        fill="none"
        stroke="#184d19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default IconVegan;
