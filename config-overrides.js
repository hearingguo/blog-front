const rewirePostCss = require('react-app-rewire-postcss');
const rewireLess = require('react-app-rewire-less');
const { compose } = require('react-app-rewired');

// module.exports = function override(config, env) {
//   config = rewireLess(config, env);
//   config = rewirePostCss(config, env);
//   return config;
// }

module.exports = function(config, env) {
  const rewires = compose(
    rewireLess,
    rewirePostCss
  );
  return rewires(config, env);
};
