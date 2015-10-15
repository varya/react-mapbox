module.exports = {
    externals: [
      {
        'react': {
          amd: 'react',
          commonjs: 'react',
          commonjs2: 'react',
          root: 'React'
        }
      },
      {
        'react-dom': {
          amd: 'react-dom',
          commonjs: 'react-dom',
          commonjs2: 'react-dom',
          root: 'ReactDOM'
        }
      }
    ],
    module: {
        loaders: [
            { test: /\.js?$/, exclude: "node_modules/", loader: "babel" },
        ]
    }
};
