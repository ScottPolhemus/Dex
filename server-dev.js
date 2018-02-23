import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

import config from './webpack.config'

const compiler = webpack(config)

new WebpackDevServer(compiler, {
  disableHostCheck: true,
  contentBase: `public/`
}).listen(process.env.PORT, `0.0.0.0`, () => {
  console.log(`started webpack dev server`)
})