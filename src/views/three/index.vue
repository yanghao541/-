<template>
  <div class="t3">
    <Header/>
    <bigbox ref="shuaxin">
      <!-- 轮播图 -->
      <div class="bot">
        <div class="nr">
          <div class="swiper-container" ref="ban">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in timg" :key="index">
                <img :src="item.imgage"/>
              </div>
            </div>
          </div>
          <!-- 搜索框 -->
          <div class="search">
            <input type="text" value="搜索想要的内容" />
          </div>

          <!-- 选项卡 -->
          <div class="select">
            <ul>
              <li>热门</li>
              <li>日本</li>
              <li>港澳台</li>
              <li>东南亚</li>
              <li>欧美澳</li>
            </ul>
            <ul id="tu">
              <li v-for="(item,index) in List" :key="index">
                <img :src="item.ImagePath" />
              </li>
            </ul>
          </div>

          <div class="all">查看全部</div>

          <div class="cate">
            <ul>
              <li v-for="(item,index) in List" :key="index">
                <img :src="item.ImagePath" alt />
                <p>{{item.GroupCity}}</p>
              </li>
            </ul>
          </div>

          <div class="a100">
            <div class="a1">热卖产品</div>
            <!-- 渲染 -->
            <div class="list" v-for="(item,index) in List" :key="index">
              <img :src="item.ImagePath" />
              <dl>
                <dt>{{item.MainTitle}}</dt>
                <dd class="l1">门票</dd>
                <dd class="l2">￥{{item.WebPrice}}起</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </bigbox>
  </div>
</template>

<script>
import { move_api } from "api/move";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import path1 from 'common/img/1.jpg'
import path2 from 'common/img/2.jpg'
import path3 from 'common/img/3.jpg'
import path4 from 'common/img/4.jpg'
import path5 from 'common/img/5.jpg'
export default {
  name: "three",
  async created() {
    if (!sessionStorage.getItem("hahaha")) {
      let data = await move_api();
      this.List = data;
      sessionStorage.setItem("hahaha", JSON.stringify(data));
    }
  },
  data() {
    return {
      timg:[
        {imgage:path1},
        {imgage:path2},
        {imgage:path3},
        {imgage:path4},
        {imgage:path5}
      ],
      List: JSON.parse(sessionStorage.getItem("hahaha")) || []
    };
  },
  mounted() {
    this.$refs.shuaxin.handDown(async () => {
      let n = parseInt(Math.random() * 8);
      let a = [321, 70, 394, 91, 199, 324, 322, 248];
      let data = await move_api(a[n]);
      this.List = data;
      sessionStorage.setItem("hahaha", JSON.stringify(data));
      this.$refs.shuaxin.gaosu();
    });
    var mySwiper = new Swiper(this.$refs.ban, {
      loop: true, 
      autoplay: {
         delay: 2000,
        disableOnInteraction: false,
      }
    });
  }
};
</script>

<style  scoped>
/* scoped */

/* 录播 */
.t3 {
  height: 100%;
}
.nr {
  height: 12rem;
}
.bot {
  position: fixed;
  width: 100%;
  /* height: 100%; */
  padding-top: 0.43rem;
  overflow-y: auto;
  top: 0.43rem;
}
.swiper-container {
  width: 100%;
  height: 1.2rem;
}
.swiper-slide > img {
  width:100%;
  height: 1.2rem;
}

/* 搜索框 */
.search {
  background: white;
  width: 100%;
  height: 0.52rem;
  padding: 0.1rem 0.15rem;
}
.search > input {
  width: 100%;
  height: 0.32rem;
  background: #f4f4f4;
  color: #999;
  border-radius: 0.53333rem;
  border: none;
  outline: medium;
}

/* 选项 */
.select > ul {
   background: white;
  height: 0.44rem;
}
.select > ul > li {
  float: left;
  text-align: center;
  line-height: 0.44rem;
  width: 0.75rem;
}
.select > ul > li > img {
  height: 0.96rem;
  width: 1.03rem;
}
.select > #tu {
  height: 2.26rem;
  width: 100%;
}
#tu > li {
  margin: 0.12rem 0 0 0.12rem;
  height: 0.96rem;
  width: 1.03rem;
}
.a100{  background: white;}
.all {
   background: white;
  height: 0.56rem;
  text-align: center;
  font-size: 0.14rem;
  color: #999;
  line-height: 0.56rem;
}
.cate {
  width: 100%;
  overflow: hidden;
  background: #fff;
  height: 1.33rem;
  border-top: 0.1rem solid rgb(238, 238, 238);
  border-bottom: 0.1rem solid rgb(238, 238, 238);
}
.cate > ul {
  position: relative;
  z-index: 1;
  height: 1.03rem;
  padding: 0.15rem 0;
  margin: 0 0.1rem;
  overflow: hidden;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.cate > ul > li {
  display: inline-block;
  width: 22.5%;
  height: 0.73rem;
}
.cate > ul > li > img {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  margin-left: 0.18rem;
}
.cate > ul > li > p {
  margin-top: 0.1rem;
  overflow: hidden;
  font-size: 0.12rem;
  color: #333;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.a1 {
   background: white;
  height: 0.36rem;
  margin: 0 0.18rem;
  font-size: 0.16rem;
  font-weight: 700;
  line-height: 0.44rem;
  color: #333;
}

.list {
   background: white;
  height: 1.07rem;
  padding: 0.1rem 0.18rem;
}
.list > img {
  width: 0.9rem;
  height: 0.9rem;
  float: left;
}
.list > dl {
  height: 0.8rem;
  float: left;
  width: 2.45rem;
  padding-right: 0.04rem;
  padding-left: 0.1rem;
}
.list > dl > dt {
  font-size: 0.14rem;
  font-weight: 700;
  color: #333;
}
.l1 {
  padding-top: 0.06rem;
  height: 0.29rem;
  color: #23beae;
}
.l2 {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.2rem;
  color: #ff5346;
}
</style>
