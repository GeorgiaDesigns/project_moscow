export default {
  grid: {
    container: "130rem",
    gutter: "3.2rem",
  },
  colors: {
    primaryDark: "#232846",
    primaryLight: "#F5F5F7",
    textHighlight: "#FA4A7F",
  },
  font: {
    family: {
      primary: "Poppins, -apple-system, Helvetica, Arial, sans-serif",
      bold: "Poppins-Bold, Helvetica, Arial, sans-serif",
    },
    weights: {
      light: 400,
      regular: 600,
      medium: 800,
      Black: 900,
    },
    lineHeights: {
      thight: "100%",
      medium: "150%",
      distant: "180%",
      giant: "200%",
    },
    sizes: {
      xxsm: "0.9rem",
      xsm: "1rem",
      sm: "1.25rem",
      md: "1.75rem",
      lg: "2.5rem",
      xl: "4.0rem",
    },
  },
  layers: {
    base: 10,
    header: 20,
    menu: 25,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },
} as const;
