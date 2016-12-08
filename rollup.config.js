import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/main.js',
  format: 'cjs',
  plugins: [ json(),babel({
      //"presets":["es2015", {"modules": false}],
      "exclude": 'node_modules/**',
      "babelrc": true
    }) ],
  dest: 'dist/bundle.js' // equivalent to --output
};
