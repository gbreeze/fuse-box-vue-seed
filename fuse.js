const fsbx = require('fuse-box');

const fuseBox = fsbx.FuseBox.init({
    homeDir: 'src/',
    sourceMap: {
        bundleReference: 'app.js.map',
        outFile: './dist/app.js.map'
    },
    alias: {
        'vue': 'vue/dist/vue.common.js'
    },
    outFile: './dist/app.js',
    plugins: [
        [
            fsbx.SassPlugin({ outputStyle: 'compressed' }),
            fsbx.CSSPlugin({})
        ],
        fsbx.TypeScriptHelpers(),
        fsbx.JSONPlugin(),
        fsbx.HTMLPlugin({ useDefault: false })
    ],
    cache: false
});

fuseBox.devServer('>main.ts **/*.html', {
    port: 4445
});