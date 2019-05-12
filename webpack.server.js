const {join, resolve} = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server/index.ts',
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.ts?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        configFile: join(__dirname, 'tsconfig.server.json')
      }
    }]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle-[hash].js',
    path: resolve(__dirname, 'build/server')
  }
};