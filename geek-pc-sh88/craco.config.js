const path = require('path')
// HtmlWebpackPlugin
const { whenProd, getPlugin, pluginByName } = require('@craco/craco')
react create想要修改webpack的配置，需要使用craco

1.推荐：通过yarn add @craco/craco，可以新增加一个配置文件，覆盖原本的react-scripts中的配置，craco.config.js。
如果是vue想要覆盖，则直接创建vue.config.js。vue直接就会读取这个文件，react需要通过安装craco来读取这个craco.config.js文件。
1.yarn add @craco/craco
2.在package.json中，将"start":"react-scripts start"替换为"craco start"
3.在package.json中，将"build":"react-scripts build"替换为"craco build"
4.在package.json中，将"test":"react-scripts test"替换为"craco test"
然后

2.yarn add eject的方式释放原本在node_modules中的react-scripts中的webpack配置，到项目中，注意，该操作是不可逆的，

module.exports = {

  webpack: {
    // 配置别名
    alias: {
      // 绝对路径
      '@': path.join(__dirname, 'src')
    },
    configure: (webpackConfig) => {
      let cdn = {
        js: [],
        css: []
      }
      // 对webpack进行配置
      whenProd(() => {
        // 只会在生产环境执行
        webpackConfig.externals = {
          react: 'React',
          'react-dom': 'ReactDOM',
          redux: 'Redux',
          'react-router-dom': 'ReactRouterDOM'
        }

        cdn = {
          js: [
            'https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.production.min.js',
            'https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js',
            'https://cdn.bootcdn.net/ajax/libs/redux/4.1.0/redux.min.js',
            'https://cdn.bootcdn.net/ajax/libs/react-router-dom/5.2.0/react-router-dom.min.js'
          ],
          css: []
        }
      })

      const { isFound, match } = getPlugin(
        webpackConfig,
        pluginByName('HtmlWebpackPlugin')
      )
      if (isFound) {
        // 找到了html的插件
        match.options.cdn = cdn
      }

      return webpackConfig
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://geek.itheima.net/v1_0/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
