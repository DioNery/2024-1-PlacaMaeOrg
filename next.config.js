const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.optimization.minimizer = [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ];
    return config;
  },
};
