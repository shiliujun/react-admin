const { override, fixBabelImports, addLessLoader, addBabelPlugins ,addDecoratorsLegacy,addWebpackAlias} = require('customize-cra');
const { resolve } = require('path');
module.exports = override(
    //实现按需加载
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    //实现自定义主题
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
    /*// 修改 create-react-app 的 webpack 的配置
        // 添加 babel 插件
        addBabelPlugins(
            [
                "@babel/plugin-proposal-decorators",
                {
                    "legacy": true
                }
            ]
        )*/
    addDecoratorsLegacy(),
    // 配置路径的别名 - 注意以特殊符号开头，防止与正常路径冲突
    addWebpackAlias({
        $utils: resolve(__dirname, 'src/utils'),
        $api: resolve(__dirname, 'src/api'),
        $assets: resolve(__dirname, 'src/assets'),
        $comp: resolve(__dirname, 'src/components'),
    })
);


