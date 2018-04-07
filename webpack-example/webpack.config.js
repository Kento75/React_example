module.exports = {
  // entryフィールド
  // 実行の起点となるファイルの指定
  entry: './entry.js',

  // outputフィールド
  // 出力に関する設定(distディレクトリ直下に作成される)
  output: {
    filename: 'output.js'
  },

  module: {
    rules: [
      // babel-loaderの設定
      {
        loader: 'babel-loader',
        test: /\.js$/,
        options: {
          presets: ['react']
        }
      }
    ]
  }
};
