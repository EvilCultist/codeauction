const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
            'components': path.resolve(__dirname, 'src/components'),
        },
        extensions: ['.js', '.jsx', '.json'],
    }
}