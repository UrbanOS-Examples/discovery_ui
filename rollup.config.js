import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';
import image from 'rollup-plugin-image'
import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs'

import pkg from './package.json';

const config = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: pkg.peerDependencies,
  plugins: [
    peerDepsExternal(),
    postcss({ extract: true, plugins: [autoprefixer] }),
    localResolve(),
    resolve(),
    image({
      output: './images',
      extensions: /\.(png|jpg|jpeg|gif|svg)$/,
      exclude: 'node_modules/**'
    }),
    babel({ exclude: ['node_modules/**', '**/*.test.js'] }),
    json(),
    commonjs(
      {
        namedExports: {
          'react-image-fallback': ['ReactImageFallback']
        }
      }
    )
  ],
};

export default config;
