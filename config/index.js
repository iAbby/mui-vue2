// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    port: 9000
  },
  dev: {
    env: require('./dev.env'),
    port: 8050,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
    	'/bgs': {
        target: 'https://restapi.ele.me',//后端接口地址
        changeOrigin: true,//是否允许跨越
        pathRewrite: {
          '^/bgs': '/bgs',//重写,
        }
    	},
			'/shopping': {
        target: 'https://restapi.ele.me',
        changeOrigin: true,
        pathRewrite: {
          '^/shopping': '/shopping',//重写,
        }
    	},	        
			'/ugc': {
		    target: 'https://restapi.ele.me',
		    changeOrigin: true,
		    pathRewrite: {
          '^/ugc': '/ugc',//重写,
        }
    	}
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
