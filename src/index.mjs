export * as Logo from './Logo.mjs'

export const state = {
  hero: {
    title: ['@inter', 'space'],
    description: 'Virtual conferencing made simple',

    menu: [
      { to: '/#installation', text: 'installation' },
      { to: '/#usage', text: 'usage' },
      { to: '/#theme-vars', text: 'theme vars' },
    ],
  },

  footer: {
    one: {
      title: 'interspace',
      before: ['description text'],
      menu: [{ to: '/privacy/', text: 'privacy notice' }],
    },
    two: {
      title: 'network',
      menu: [
        { to: 'https://parallele.at', text: 'parallele.at' },
        { to: 'https://giveth.io', text: 'giveth.io' },
        { to: 'https://bwb.is', text: 'bwb.is' },
      ],
    },
    three: {
      title: 'social links',
      menu: [
        { to: 'https://twitter.com/interspacechat', text: 'twitter' },
        { to: 'https://keybase.io/interspaceorg', text: 'keybase' },
        { to: 'https://github.com/interspacechat', text: 'github' },
      ],
    },
  },
}

export const vars = {
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
}

export default (v = vars) => {
  v = { ...vars, ...v }

  return {
    '.Logo': {
      svg: {
        width: '2.6em',
      },
    },
  }
}
