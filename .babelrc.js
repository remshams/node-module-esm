const presets = ["@babel/env", "@babel/typescript"];

module.exports = {
  "env": {
    "production": {
      "presets": presets,
      "ignore": ["src/**/*.spec.ts"]
    },
    "test": {
      "presets": presets    
    },
  }
}