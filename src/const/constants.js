const breakpoints = {
  // xs: "320px",
  sm: "700px",
  md: "1024px",
  lg: "1400px",
  // xl: "1600px",
  // "2xl": "1536px",
};

export const devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  "2xl": `(min-width: ${breakpoints["2xl"]})`,
};
