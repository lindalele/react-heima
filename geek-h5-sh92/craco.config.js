const path = require('path')
// vw是屏幕宽度的1%，vh是屏幕高度的1%
// 1.如果用vw来适配，插件就是yarn add -D postcss-px-to-viewport
// 2.在这个文件中配置

const pxToViewport = require('postcss-px-to-viewport')
const { whenProd, getPlugin, pluginByName } = require('@craco/craco')
const vw = pxToViewport({
  // 视口宽度，一般就是 375（ 设计稿一般采用二倍稿，宽度为 375 ）
  // 插件会自动把px转换成vw, 会自动算(px/375 * 100) vw
  viewportWidth: 375, //指定设计稿的宽度
})
module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
      // 代表着 src/assets/styles 文件夹
      '@scss': path.resolve(__dirname, 'src', 'assets', 'styles'),
    },
    // 配置webpack 的 cdn
    configure: (webpackConfig) => {
      let cdn = {
        js: [],
        css: [],
      }
      whenProd(() => {
        // 如果是生产环境
        webpackConfig.externals = {
          react: 'React',
          'react-dom': 'ReactDOM',
          redux: 'Redux',
        }
        cdn = {
          js: [
            'https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.production.min.js',
            'https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js',
            'https://cdn.bootcdn.net/ajax/libs/redux/4.1.0/redux.min.js',
          ],
          css: [],
        }
      })
      // 查找html-webpack-plugin插件
      const { isFound, match } = getPlugin(
        webpackConfig,
        pluginByName('HtmlWebpackPlugin')
      )
      if (isFound) {
        // 找到了html的插件
        match.userOptions.cdn = cdn
      }
      return webpackConfig
    },
  },
  style: {
    // 配置px自动转vw
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          indent: 'postcss',
          plugins: [vw],
        },
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://geek.itheima.net',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
