const webpack = require('@nativescript/webpack');
const fs = require('fs');

module.exports = (env) => {
    webpack.init(env);
    return webpack.resolveConfig();
};
