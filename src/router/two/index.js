export default{
    path:"/two",
    // 路由的懒加载
    component:()=>import("views/two"),
    name:"two",
    meta: {
        title:"海外游玩",
       tabBar:false,
       auth:false
    },
}