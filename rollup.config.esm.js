const Babel = require('rollup-plugin-babel');

module.exports = [
  'index',
].map((name) => {
  return {
    input: `src/${name}.mjs`,
    output: {
      file: `./${name}.mjs`,
      format: 'esm'
    },
    plugins: [
      Babel({
        presets: [
          '@babel/env',
        ],
      }),
    ],
    external: [ 'relaks-event-emitter' ]
  };
});
