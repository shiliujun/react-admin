const { override, fixBabelImports, addLessLoader, addBabelPlugins } = require('customize-cra');

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
    // 修改 create-react-app 的 webpack 的配置
    module.exports = override(
        // 添加 babel 插件
        addBabelPlugins(
            [
                "@babel/plugin-proposal-decorators",
                {
                    "legacy": true
                }
            ]
        )
    )
);


