import colors, { StyleOptions } from "../colors";

const Input = {
  variants: {
    solid: () => ({}),
    outline: () => ({}),
  },
  baseStyle: ({ colorMode }: StyleOptions) => ({
    field: {
      fontWeight: "bold",
      border: "1.5px solid",
      borderColor: colors.primary,
      _invalid: {
        borderColor: colors.primary,
      },

      _readOnly: {
        bg: colors.primary,
        color: colors.primary,
        borderBottom: "none",
        cursor: "not-allowed",
      },

      _disabled: {
        bg: colors.primary,
        color: colors.primary,
        borderBottom: "none",
        cursor: "not-allowed",
      },

      _hover: {
        borderColor: colors.primary,

        _invalid: {
          borderColor: colors.primary,
        },
      },

      _focus: {
        bg: colors.gray[100],
        borderColor: colors.primary,

        _invalid: {
          borderColor: "red",
        },

        _hover: {
          borderColor: colors.primary,

          _invalid: {
            borderColor: "red",
          },
        },
      },
    },
  }),
  sizes: {
    sm: {
      field: {
        pt: 8,
        pb: 2,
        px: 4,
        fontSize: "md",
        width: "150px",
        h: "48px",
        rounded: "5px",
      },
    },
    md: {
      field: {
        pt: 8,
        pb: 2,
        px: 4,
        fontSize: "md",
        width: "300px",
        h: "48px",
        rounded: "5px",
      },
    },
  },
  defaultProps: {
    variant: "solid",
    size: "md",
  },
};

export default Input;
