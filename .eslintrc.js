// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
  },
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],

    // import rules
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['test/**/*.js', 'config/**/*.js'] }],
  },
};
