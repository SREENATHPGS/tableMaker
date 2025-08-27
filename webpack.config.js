const path = require('path');

module.exports = {
    mode : 'production',
    entry : {
        tablemaker : path.resolve(__dirname, 'src/index.js')
    },
    output : {
        path : path.resolve(__dirname, 'dist'),
        // filename : '[name]-[contenthash].js',
        filename : '[name].js',
        clean :true,
        globalObject : 'this',
        library : {
            name: 'TABLEMAKER',
            type: 'umd'
        },
    },
    devtool : 'source-map',
};
