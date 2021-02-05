import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

const extensions = ['.js', '.ts' ];

export default  {
  input: 'src/index.ts',
  output: [{
    file: 'lib/bundles/bundle.esm.js',
    format: 'esm',
    name: 'bundle.esm',
    sourcemap: true
  },{
    file: 'lib/bundles/bundle.esm.min.js',
    format: 'esm',
    plugins: [terser()],
    sourcemap: true
  }, {
    file: 'lib/bundles/bundle.umd.js',
    format: 'umd',
    name: 'bundle',
    sourcemap: true
  }, {
    file: 'lib/bundles/bundle.umd.min.js',
    format: 'umd',
    name: 'bundle',
    plugins: [terser()],
    sourcemap: true
  }],
  plugins: [
    resolve({ extensions }),
    babel({ babelHelpers: 'bundled', include: ['src/**/*.ts'], extensions, exclude: './node_modules/**'})
  ]
}