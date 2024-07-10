import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import { nodeExternals } from 'rollup-plugin-node-externals'

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/index.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    nodeExternals(),
    typescript(),
    nodeResolve(),
    terser(), // 코드 압축을 위한 플러그인
  ],
}
