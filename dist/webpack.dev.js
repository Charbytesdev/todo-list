"use strict";
var merge = require("webpack-merge").merge;
var common = require("./webpack.common");
module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    mode: "development",
});
//# sourceMappingURL=webpack.dev.js.map