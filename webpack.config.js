module.exports = {
    entry: "./lib/frontend/yoji.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    }
};

