var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    context: __dirname,
    entry: "./demo/index.js",
    output: {
        path: __dirname + "demo",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js(x)?$/, loader: "babel" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new LiveReloadPlugin()
    ]
};
