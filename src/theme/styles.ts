import { StyleOptions } from './colors';

const styles = {
  global: ({ colorMode }: StyleOptions) => ({
    body: {
      bg: 'white',
      color: colorMode === 'light' ? 'gray.900' : 'gray.300',
    },
    li: {
      display: 'list-item',
      textAlign: '-webkit-match-parent',
    },
    ul: {
      display: 'block',
      marginBlockStart: '0.5em',
      marginBlockEnd: '0.5em',
      paddingInlineStart: '40px',
    },
    ol: {
      display: 'block',
      marginBlockStart: '0.5em',
      marginBlockEnd: '0.5em',
      paddingInlineStart: '40px',
    },
    em: { fontStyle: 'italic' },
    p: {
      fontFamily: 'Fraktion Sans, sans-serif',
    },
  }),
};

export default styles;
