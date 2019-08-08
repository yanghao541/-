export default{
    path:"/home",
    // 路由的懒加载
    component:()=>import("components/home"),
    name:"home",

}