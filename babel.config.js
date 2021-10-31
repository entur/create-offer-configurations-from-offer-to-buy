// eslint-disable-next-line unicorn/prefer-module -- ES6 export crashes babel
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript'
  ]
};
