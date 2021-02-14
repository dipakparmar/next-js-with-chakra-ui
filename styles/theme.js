import React from "react";
import { extendTheme, theme } from "@chakra-ui/react";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    teal: {
      100: "#d6eaea",
      200: "#add5d5",
      300: "#83c1bf",
      400: "#5aacaa",
      500: "#319795",
      600: "#277977",
      700: "#1d5b59",
      800: "#143c3c",
      900: "#0a1e1e",
    },
    blue: "#0070f3",
  },
};

export default extendTheme({ customTheme });
