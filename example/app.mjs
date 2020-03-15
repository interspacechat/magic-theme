export const state = {
  title: 'interspace',
  description: 'Virtual conferencing made simple.',

  branding: 'interspace',

  menu: [
    { to: '/#installation', text: 'installation' },
    { to: '/#usage', text: 'usage' },
    { to: '/#theme-vars', text: 'theme vars' },
  ],

  vars: {
    background: {
      dark: '#434343',
      light: '#f3f3f3',
    },

    link: {
      dark: '#e29a00',
      light: '#e29a00',

      hover: {
        dark: '#999999',
        light: '#dddddd',
      },
    },

    neutral: '#5a5a5a',

    primary: {
      dark: '#f3f3f3',
      light: '#434343',
      neutral: '#e29a00',
    },

    text: {
      dark: '#f3f3f3',
      light: '#434343',
    },

    white: '#ffffff',

    maxWidth: '1000px',

    fadeDuration: '500ms',

    widths: {
      tablet: '500px',
      laptop: '1024px',
      desktop: '1600px',
    },
  },
}
