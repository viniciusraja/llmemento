import colors, { StyleOptions } from '~/theme/colors';

const Button = {
  variants: {
    solid: () => ({
      bg: colors.brand.perwinkle[500],
      color: 'white',

      _disabled: {
        color: colors.brand['cool.gray'],
        bg: colors.gray['700'],
      },

      _hover: {
        bg: colors.brand.perwinkle[500],

        _disabled: {
          color: colors.brand['cool.gray'],
          bg: colors.gray['700'],
        },
      },
    }),
    outline: ({ colorMode }: StyleOptions) => ({
      bg: 'transparent',
      color: colorMode === 'light' ? colors.brand.navy : 'white',
      border: '2px solid',
      borderColor: colors.brand.perwinkle[500],

      _disabled: {
        color: colors.brand['cool.gray'],
        borderColor: colors.gray['700'],
      },

      _hover: {
        bg: colors.brand.perwinkle['500.o10'],

        _disabled: {
          color: colors.brand['cool.gray'],
          borderColor: colors.gray['700'],
        },
      },

      _focus: {
        bg: colors.brand.perwinkle['500.o25'],

        _hover: {
          bg: colors.brand.perwinkle['500.o25'],
        },
      },
    }),
    text: ({ colorMode }: StyleOptions) => ({
      bg: 'transparent',
      color: colorMode === 'light' ? colors.brand.navy : 'white',

      _disabled: {
        color: colors.brand['cool.gray'],
      },

      _hover: {
        bg: colors.brand.perwinkle['500.o10'],

        _disabled: {
          color: colors.brand['cool.gray'],
        },
      },

      _focus: {
        bg: colors.brand.perwinkle['500.o25.dark'],

        _hover: {
          bg: colors.brand.perwinkle['500.o25.dark'],
        },
      },
    }),
  },
  baseStyle: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    rounded: '0',
    overflow: 'hidden',
  },
  defaultProps: {
    variant: 'solid',
  },
};

export default Button;
