import Button from './src/index.vue'

// 为组件添加注册方法
Button.install = (app: any): void => {
  app.component(Button.name, Button)
}

export default Button
