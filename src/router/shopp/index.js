export default{
    // 跳转详情  url带参数 id
    path:"/shopp/:LineId",
    component:()=>import("views/shopp"),
    name:"shopp",
    meta: {
        title:"商品详情",
       tabBar:false,
       auth:false
    },
    props:true
}