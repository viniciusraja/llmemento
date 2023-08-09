import colors, { StyleOptions } from "../colors";

const FormLabel = {
  baseStyle: ({ colorMode }: StyleOptions) => ({
    pos: "absolute",
    pointerEvents: "none",
    fontSize: "sm",
    left: 4,
    top: "-10%",
    transformOrigin: "top left",
    transition: "all 0.2s ease-out",
    color: "gray.900",

    _invalid: {
      color: colors.red[400],
    },

    _disabled: {
      color: "gray.800",
    },

    _focus: {
      color: "gray.800",
      _invalid: {
        color: "red",
      },
    },
  }),
};
export default FormLabel;
