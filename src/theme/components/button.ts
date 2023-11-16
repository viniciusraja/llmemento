import { ThemeComponents } from "@chakra-ui/react";
import colors, { StyleOptions } from "../colors";

const Button: ThemeComponents["button"] = {
  variants: {
    solid: () => ({
      bg: colors.primary,
      color: "white",
      _disabled: {
        color: colors.primary,
        bg: colors.gray["700"],
      },

      _hover: {
        bg: colors.primary,

        _disabled: {
          color: colors.primary,
          bg: colors.gray["700"],
        },
      },
    }),
  },
  baseStyle: {
    color: "white",
    fontWeight: "bold",
    rounded: "10px",
    textTransform: "title",
    overflow: "hidden",
  },
  defaultProps: {
    variant: "solid",
  },
};

export default Button;
