// const { injectBabelPlugin } = require("react-app-rewired");
const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
} = require('customize-cra');
// const rewireMobX = require("react-app-rewire-mobx");

// module.exports = function override(config, env) {
//   config = injectBabelPlugin("babel-plugin-styled-components", config);
//   config = rewireMobX(config, env);

//   return config;
// };
module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint()
);
