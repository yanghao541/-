<template>
<!-- 让这盒子去包裹需要滑动的盒子 -->
    <div class="box" ref="box">
        <!-- 组件 -->
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"bigbox",
     mounted(){
        this.scroll=new BScroll(this.$refs.box,{
            click: true,
            // 开启下拉刷新
            pullDownRefresh:true,
            // 开启上拉刷新

        })
    },
    methods:{
        handDown(callback){
            // 这个方法使用 下拉请求事件  
            //  由于是封装 数据不能写死 所以使用回调
            //  回调传回来什么就做什么事
            this.scroll.on("pullingDown",()=>{
                callback()
            })
        },
        gaosu(){
            // 告知 数据已刷新
            this.scroll.finishPullDown();
            //  数据重新注册 确保正常
            this.scroll.refresh();
        },

 }
}
</script>

<style>
/* 去继承父元素的高度 从而达到内层大于外层的作用 */
.box{height:100%;}
</style>
