export default{
    path:"/citylist",
    // 路由的懒加载
    component:()=>import("views/citylist"),
    name:"citylist",
    meta: {
        title:"城市列表",
       tabBar:false,
       auth:false
    },
}