const fontGenerator = (
  fontSize = "0.9375rem",
  fontWeight = "normal",
  lineHeight = "normal"
) => ({
  "font-size": fontSize,
  "font-weight": fontWeight,
  "line-height": lineHeight,
});
export const theme = {
  colors: {
    //색상
    //main색상
    green100: "#C8D6B0",
    green200: "#B6C99B",
    green300: "#92A56E",
    green400: "#57643A",
    green500: "#D8E2C3",
    green600: "#ECF0DF",

    //bg색상
    bg100: "#E4EBD8",
    bg200: "#F5F5ED",
    bg300: "#fbfbee",
    bgGray: "#F5F5F5",

    pink: "#FEC8C1",
    pink200: "#F29E9E",

    yellow: "#F5F0D0",
    black: "#474747",
    gray: "#47474799",
    gray200: "#929292",
    gray300: "#717171",

    blue: "#87B6D8",

    orange: "#F1AE7E",

    white: "#FFFFFF",
  },

  fonts: {
    SUITEB0: fontGenerator("1.125rem", "800", "150%"),

    SUITEM1: fontGenerator("1.125rem", "500", "150%"),
    SUITES1: fontGenerator("1.125rem", "600", "150%"),
    SUITEB1: fontGenerator("1.125rem", "700", "150%"),

    SUITEM2: fontGenerator("1rem", "500", "150%"),
    SUITES2: fontGenerator("1rem", "600", "150%"),
    SUITEB2: fontGenerator("1rem", "700", "150%"),
    SUITEB5: fontGenerator("1rem", "800", "150%"),

    SUITEM3: fontGenerator("0.875rem", "500", "150%"),
    SUITES3: fontGenerator("0.875rem", "600", "150%"),
    SUITEB3: fontGenerator("0.875rem", "700", "150%"),
    SUITE03: fontGenerator("0.875rem", "800", "150%"),

    SUITEM4: fontGenerator("0.75rem", "500", "150%"),
    SUITES4: fontGenerator("0.75rem", "600", "150%"),
    SUITEB4: fontGenerator("0.75rem", "700", "150%"),
    SUITEO4: fontGenerator("0.75rem", "800", "150%"),

    SUITES5: fontGenerator("0.5rem", "600", "150%"),
    SUITES6: fontGenerator("0.5rem", "500", "150%"),
    SUITE10: fontGenerator("0.625rem", "500", "150%"),
    SUITES5: fontGenerator("0.5rem", "600", "150%"),
  },
};
