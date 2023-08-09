import colors, { StyleOptions } from "../colors";

const Button = {
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
    outline: ({ colorMode }: StyleOptions) => ({
      bg: "transparent",
      color: colors.primary,
      border: "2px solid",
      borderColor: colors.primary,

      _disabled: {
        color: colors.primary,
        borderColor: colors.gray["700"],
      },

      _hover: {
        bg: colors.primary,

        _disabled: {
          color: colors.primary,
          borderColor: colors.gray["700"],
        },
      },

      _focus: {
        bg: colors.primary,

        _hover: {
          bg: colors.primary,
        },
      },
    }),
    text: ({ colorMode }: StyleOptions) => ({
      bg: "transparent",
      color: colors.primary,

      _disabled: {
        color: colors.primary,
      },

      _hover: {
        bg: colors.primary,

        _disabled: {
          color: colors.primary,
        },
      },

      _focus: {
        bg: colors.primary,

        _hover: {
          bg: colors.primary,
        },
      },
    }),
  },
  baseStyle: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    rounded: "0",
    overflow: "hidden",
  },
  defaultProps: {
    variant: "solid",
  },
};

export default Button;
