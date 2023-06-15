module.exports = {
    devServer: {
        proxy: {
            '/web': {
                target: 'http://127.0.0.1:8088',//配置实际请求的接口地址域名
                changeOrigin: true
            }
        }
    }
}
