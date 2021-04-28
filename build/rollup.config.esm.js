import { resolve } from 'path'
import base from './rollup.config.base'

const readDirectory = dir => {
  const list = fs.readdirSync(dir)
  const ret = []
  list.forEach(filename => {
    const dist = resolve(dir, filename)
    const stat = fs.statSync(dist)
    if (stat.isFile()) {
      if (filename === 'index.ts') {
        ret.push(dist)
      }
    } else {
      ret.push(...readDirectory(dist))
    }
  })
  return ret
}
const indexList = readDirectory(resolve(__dirname, '../packages'))

// 读取 packages 中的所有包
const config = indexList
  //  // 忽略packages/index.ts 只编译子模块
  .filter(item => item.indexOf('packages\\index.ts') === -1)
  .map(item => ({
    input: item,
    output: {
      format: 'es',
      file: dist.replace('packages', 'lib').replace('.ts', '.js') // 设置输出目录
    },
    ...base
  }))

export default config
