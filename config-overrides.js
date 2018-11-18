module.exports = config => {
  require('react-app-rewire-postcss')(config, {
    plugins: loader => [require('postcss-preset-env')()]
  });
  return config;
};
