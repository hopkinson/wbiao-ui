import json from '@rollup/plugin-json' // 使rollup可以把json文件作为模块加载，配置文件中会用到
import { nodeResolve } from '@rollup/plugin-node-resolve' // 打包的过程中把依赖的第三方包打包进来
import vue from 'rollup-plugin-vue' // 处理vue文件
import { terser } from 'rollup-plugin-terser' // 压缩代码
import scss from 'rollup-plugin-scss' // plugin-scss将scss结尾的变为css
import dartSass from 'sass'

const deps = Object.keys(pkg.dependencies || {})

export default {
  plugins: [
    terser(), //开启压缩代码
    vue({
      target: 'browser', // 服务端渲染使用 'node'
      css: false,
      exposeFilename: false
    }),
    json(), // 使 rollup 可以使用 require 的方式将json文件作为模块加载
    nodeResolve(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true
        },
        include: ['packages/**/*', 'typings/vue-shim.d.ts'],
        exclude: ['node_modules']
      },
      abortOnError: false
    }),
    scss({ include: /\.scss$/, sass: dartSass }) // 对所有样式文件进行编译
  ],
  external(id) {
    return /^vue/.test(id) || deps.some(k => new RegExp('^' + k).test(id))
  }
}
