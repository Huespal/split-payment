import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { config } from 'dotenv';
import path from 'node:path';
import { parseArgs } from 'node:util';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import tsConfigPaths from 'rollup-plugin-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';
const args = parseArgs({
  options: {
    environment: {
      type: 'string',
      short: 'e',
      default: 'development'
    },
    configuration: {
      type: 'string',
      short: 'c'
    },
  },
});

const env = args.values.environment;
const production = env === 'production';
let environmentVariablesPath = './.env.development';

console.log(`Split Payment build for ${env} environment in process...`);

if (production) {
  environmentVariablesPath = './.env.production';
}

const ENV_VARIABLES = config({
  path: environmentVariablesPath,
}).parsed;

const fileName = ENV_VARIABLES.WIDGET_NAME || 'split-payment.js';

export default {
  input: './src/widget/index.tsx',
  output: {
    file: `dist/${fileName}`,
    format: 'iife',
    sourcemap: false,
    inlineDynamicImports: true,
    name: 'SplitPayment'
  },
  plugins: [
    tsConfigPaths({
      tsConfigPath: './tsconfig.json'
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development')
    }),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    alias({
      entries: [
        { find: '@', replacement: path.resolve('./src/widget') },
        { find: 'react', replacement: 'preact/compat' },
        { find: 'react-dom', replacement: 'preact/compat' },
        { find: 'react/jsx-runtime', replacement: 'preact/jsx-runtime' },
        { find: 'react/jsx-dev-runtime', replacement: 'preact/jsx-dev-runtime' }
      ]
    }),
    nodeResolve({
      extensions: ['.tsx', '.ts', '.json', '.js', '.jsx', '.mjs'],
      browser: true
    }),
    json(),
    url(),
    svgr(),
    babel({
      babelHelpers: 'bundled',
      presets: [
        '@babel/preset-typescript',
        ['@babel/preset-react', {
          runtime: 'automatic',
          importSource: 'preact',
        }]
      ],
      plugins: [
        ['@babel/plugin-transform-react-jsx', {
          runtime: 'automatic',
          importSource: 'preact'
        }]
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs']
    }),
    commonjs(),
    nodePolyfills({
      exclude: ['crypto']
    }),
    injectProcessEnv(ENV_VARIABLES),
    terser({
      ecma: 2020,
      mangle: { toplevel: true },
      compress: {
        module: true,
        toplevel: true,
        unsafe_arrows: true,
        drop_console: production,
        drop_debugger: production
      },
      output: { quote_style: 1 }
    }),
    visualizer()
  ]
};
