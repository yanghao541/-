
const path=require("path")
module.exports={
    publicPath:"/",
    devServer:{
        proxy:{ 
            "/api":{
                target:"http://39.97.33.178",
                changeOrigin:true,
            },
        "/lvyou":{
            // 地址
            target:"https://m.ly.com",
            changeOrigin:true,
            // ws: false,
            pathRewrite: {
                "^/lvyou": ""
                }
        },
        }
        // 如果项目还有其他地址就在配置一份
    },
    configureWebpack:{
        resolve:{
            alias:{
                // 上面引用path方法  const path=require("path")
                // @就代表./src
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "components":path.join(__dirname,"./src/components"),
                "views":path.join(__dirname,"./src/views"),
                "common":path.join(__dirname,"./src/common"),
                "utils":path.join(__dirname,"./src/utils"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store")
            }
        }
    },

}
// 如果说项目中还有其他地址，就在配置一份



