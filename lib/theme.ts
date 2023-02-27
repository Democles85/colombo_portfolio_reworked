import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

const styles = {
  global: (props: Dict<any>) => ({
    body: {
      bg: mode('#f0e7db', '#111111')(props),
      transition: 'all 0.25s linear',
    },
    '.chakra-divider': {
      borderColor: ` ${mode('#1d1d1d', '#f0e7db')(props)} !important`,
      opacity: 1,
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: 20,
        textDecoration: 'underline',
        textUnderlineOffset: 5,
        textDecorationThickness: 2,
        textDecorationColor: '#FFAF36',
        marginTop: 3,
        marginBottom: 4,
      },
      'header-title': {
        textDecoration: 'none',
        fontSize: 20,
        textDecorationColor: '#525252',
        marginTop: 3,
        marginBottom: 4,
      },
      'service-title': (props: Dict<any> | StyleFunctionProps) => ({
        color: mode('#202020', '#fcb03b')(props),
      }),
      highlight: (props: Dict<any> | StyleFunctionProps) => ({
        color: mode('#202020', '#fcb03b')(props),
        fontSize: 20,
      }),
    },
  },
  Link: {
    baseStyle: (props: Dict<any> | StyleFunctionProps) => ({
      color: mode('#ffaf36', '#ffc670')(props),
      textUnderlineOffset: 3,
    }),
  },
  Drawer: {
    baseStyle: (props: Dict<any> | StyleFunctionProps) => ({
      bg: mode('#f0e7db', '#202023')(props),
    }),
  },
};

const colors = {
  grassTeal: '#88ccca',
  colomboOrange: '#fcb03b',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, colors });
export default theme;
