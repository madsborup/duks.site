import '../../../static/fonts/inter.css'

const BASELINE = 20;
const BORDER_RADIUS = 4;
const CONTENT_WIDTH = 720;

const SCALES = {
  XXSMALL: 0.25,
  XSMALL: 0.5,
  SMALL: 0.75,
  MEDIUM: 1,
  LARGE: 1.5,
  XLARGE: 2,
  XXLARGE: 2.5
};

export default {
  colors: {
    white: "#FFFFFF",
    background: "#FFF",
    border: "#EAEAEA",
    hover: "#F8F9F9",
    heading: "#050037",
    text: "#4C4760",
    textMuted: "#888794",
    primary: "#5A51FB",
    primaryMuted: "#6B62F8",
    secondary: "#5FAAFC"
  },
  font: {
    family: `'Inter', sans-serif`,
    size: {
      xsmall: `${SCALES.XSMALL + 0.2}rem`,
      small: `${SCALES.SMALL}rem`,
      regular: `${SCALES.MEDIUM}rem`,
      h1: `${SCALES.XXLARGE}rem`,
      h2: `${SCALES.LARGE}rem`,
      h3: `${SCALES.MEDIUM + 0.25}rem`,
      h4: `${SCALES.MEDIUM + 0.05}rem`
    },
    letterSpacing: {
      heading: `-0.2px`
    }
  },
  spacing: {
    xxsmall: `${SCALES.XXSMALL * BASELINE}`,
    xsmall: `${SCALES.XSMALL * BASELINE}`,
    small: `${SCALES.SMALL * BASELINE}`,
    medium: `${SCALES.MEDIUM * BASELINE}`,
    large: `${SCALES.LARGE * BASELINE}`,
    xlarge: `${SCALES.XLARGE * BASELINE}`
  },
  BORDER_RADIUS,
  CONTENT_WIDTH
};
