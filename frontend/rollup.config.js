import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const isProduction = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
      preventAssignment: true,
    }),
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      extract: true,
      minimize: isProduction,
      sourceMap: !isProduction,
    }),
    url({
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif', '**/*.woff2', '**/*.ttf'],
      limit: 0,
      destDir: 'dist/assets',
      fileName: '[name]-[hash][extname]',
    }),
    !isProduction && serve({
      contentBase: 'dist',
      port: 3000,
      open: true,
    }),
    !isProduction && livereload('dist'),
    isProduction && terser(),
  ],
};
