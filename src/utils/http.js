import axios from "axios";
import Loading from "common/loading/index.js"
//  ！！！使用vm重新接收 防止他二次创建  每次使用loading（）执行会造成多次创建
let vm=Loading()
const server=axios.create({
    // 请求3秒超时
    timeout:5000,
    // 跨域凭证
    withCredentials:true,
})
// 请求 两种方式 返回config
server.interceptors.request.use((config)=>{
    if(config.method.toUpperCase()=="GET"){
        // config.params=={...config.data}
    }else if(config.method.toUpperCase()=="POST"){    
        config.headers["content-type"]="appliaction/x-www-form-urlencoded";
    }
 //请求时用 显示loading的函数 
    vm.com()
    return config;
},(err)=>{
    Promise.reject(err)
})
//  返回如果ok就 返回data
server.interceptors.response.use((res)=>{
    if(res.statusText=="OK"){
     //请求成功时用 显示loading的函数 
     vm.go()
        return res.data
    }
},(err)=>{
    Promise.reject(err)
})
// 导出这三个参数 
export default(method,url,data)=>{
    if(method.toUpperCase()=="GET"){
        // get请求导出url和params里的data
        return server.get(url,{
            params:data
        })
    }else if(method.toUpperCase()=="POST"){
        // post请求导出uir和data
        return server.post(url,data)
    }
}

