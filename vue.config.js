// import component from '*.vue'

const { defineConfig } = require('@vue/cli-service')
const path = require('path')

console.log(process.env.VUE_APP_MAIN_MODE)

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: ` @import "./src/assets/style/variables.scss";
               `
      }
    }
  },
  // 修改webpack设置
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '~': path.resolve(__dirname, 'public')
      }
    },
    // 配置模块
    module: {
      rules: [
        // 将md以文本形式导入
        {
          test: /\.md$/,
          use: [
            {
              loader: 'text-loader'
            }
          ]
        }
      ]
    }
  },
  // 配置多入口
  pages: {
    index: {
      entry:
        process.env.VUE_APP_MAIN_MODE === 'edit'
          ? 'src/entrance/editMain/main.ts'
          : 'src/entrance/readMain/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
})
