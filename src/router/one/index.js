export default{
    path:"/one",
    // 路由的懒加载
    component:()=>import("views/one"),
    name:"one",
    meta: {
        title:"海外游",
       tabBar:false,
       auth:false
    },
}