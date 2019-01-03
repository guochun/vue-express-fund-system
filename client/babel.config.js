module.exports = {
  presets: [
    '@vue/app',
  ],
  plugin: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
};
