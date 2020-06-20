import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

const tsConfig = { 
  lib: ['es5', 'es6', 'dom'], 
  target: 'es5'
}

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'walt'
  },
  plugins: [typescript(tsConfig), terser()],
}
