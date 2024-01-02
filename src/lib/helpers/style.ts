// Define breakpoints for responsive design
const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

// Helper function to generate media queries
const mq = (breakpoint: keyof typeof breakpoints) =>
  `@media (min-width: ${breakpoints[breakpoint]}px)`;

export { breakpoints, mq };
