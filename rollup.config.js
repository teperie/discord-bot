import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import { nodeExternals } from 'rollup-plugin-node-externals'

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/app.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [nodeExternals(), typescript(), nodeResolve(), terser()],
}
