import { theme } from "@chakra-ui/react";

export interface StyleOptions {
  colorMode: "light" | "dark";
}

const colors = {
  primary: "#055",
  secondary: "#055333",
  tertiary: "#958488",
  ...theme.colors,
} as const;

export default colors;
