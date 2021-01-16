const sharedPresets = ['@babel/typescript'];

module.exports = {
  env: {
    es: {
      presets: [['@babel/env', {
        modules: false
      }], ...sharedPresets],
      ignore: ['src/**/*.spec.ts']
    },
    cjs: {
      presets: ['@babel/env', ...sharedPresets],
      ignore: ['src/**/*.spec.ts']
    },
    test: {
      presets: ['@babel/env', ...sharedPresets]    
    },
  }
}