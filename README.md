## interspace/magic-theme

the [@magic-theme](https://magic-themes.github.io/) for interspace.
shared between all interspace pages to get a unified color scheme and page layout

#### install:
```bash
// no @ for now. this is not published yet.
npm install --save --save-exact interspace/magic-theme
```

#### usage:

##### import:
```javascript
// config.mjs:

export default {
  //... other config
  THEME: '@interspace/magic-theme',

  // multiple themes
  // THEME: [...other themes, '@interspace/magic-theme'],
}
```

@magic will then import and use the theme automagically.

#### changelog

##### 0.0.1
first release

##### 0.0.2 - unreleased
...
