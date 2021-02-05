const shared = {
  ignore: ['src/**/*.spec.ts']
}
const sharedPresets = ['@babel/typescript'];

module.exports = {
  env: {
    esmUnbundled: {
      ...shared,
      presets: [['@babel/env', {
        modules: false
      }], ...sharedPresets],
    },
    esmBundled: {
      ...shared,
      presets: [['@babel/env', {
        targets: "> 0.25%, not dead"
      }], ...sharedPresets],
    },
    cjs: {
      ...shared,
      presets: ['@babel/env', ...sharedPresets],
      ignore: ['src/**/*.spec.ts']
    },
    test: {
      presets: ['@babel/env', ...sharedPresets]    
    },
  }
}