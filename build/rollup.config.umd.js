import { resolve } from 'path'
import base from './rollup.config.base'
import pkg from '../package.json'
const config = Object.assign({}, base, {
  // 入口
  input: resolve(__dirname, '../packages/index.ts'),
  output: {
    name: pkg.name,
    file: 'dist/index.umd.js',
    format: 'umd'
  }
})

export default config
