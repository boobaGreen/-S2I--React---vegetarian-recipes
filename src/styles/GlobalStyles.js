// #fcf6b9
//#017f00 vegan logo
// #184d19
//#184d19
//#f3f4f6
//"#059669" pen on chart
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
  --color-nav-hover:#ffe4a2;
  --color-nav-link:black;
  --color-my-logo:#017f00;
  --color-my-plate:#f3f4f6;
  --color-my-back:#fcf6b9;
  --color-my-pen:#3e4a3c;
  --color-green-fix:#184d19;
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    --image-grayscale: 0;
  --image-opacity: 100%;

  --color-grey-plate: #047857;
  }

  &.dark-mode {
    --color-green-fix:#184d19;
    --color-nav-hover:#017f00;
    --color-nav-link:white;
    --color-my-logo:#017f00;
    --color-my-back:#184d19;
    --color-my-pen:#dcf9d7;
    --color-my-plate:#f3f4f6;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);



--color-grey-plate:#f3f4f6;
  }
  
 
  
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;


}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
/*
 * react-circular-progressbar styles
 * All of the styles in this file are configurable!
 */

.CircularProgressbar {
  /*
   * This fixes an issue where the CircularProgressbar svg has
   * 0 width inside a "display: flex" container, and thus not visible.
   */
  width: 100%;
  /*
   * This fixes a centering issue with CircularProgressbarWithChildren:
   * https://github.com/kevinsqi/react-circular-progressbar/issues/94
   */
  vertical-align: middle;
}

.CircularProgressbar .CircularProgressbar-path {
  stroke: #3e98c7;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease 0s;
}

.CircularProgressbar .CircularProgressbar-trail {
  stroke: #d6d6d6;
  /* Used when trail is not full diameter, i.e. when props.circleRatio is set */
  stroke-linecap: round;
}

.CircularProgressbar .CircularProgressbar-text {
  fill: #3e98c7;
  font-size: 20px;
  //dominant-baseline: middle;
  text-anchor: middle;
}

.CircularProgressbar .CircularProgressbar-background {
  fill: #d6d6d6;
}

/*
 * Sample background styles. Use these with e.g.:
 *
 *   <CircularProgressbar
 *     className="CircularProgressbar-inverted"
 *     background
 *     percentage={50}
 *   />
 */
.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {
  fill: #3e98c7;
}

.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {
  fill: #fff;
}

.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {
  stroke: #fff;
}

.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {
  stroke: transparent;}
`;

export default GlobalStyles;
