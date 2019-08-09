<template>
  <div class="s11">
    <Header />
    <div class="swiper-container banner" ref="ban">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in image" :key="index">
          <img :src="item" class="h" />
        </div>
      </div>
    </div>
    <div class="c2">
      <div class="miaoshu">
        <div class="miaoshu1">
          <div>共游玩{{da.Day}}天</div>
          <div>{{da.Describle}}</div>
        </div>

        <div class="price">价格￥：{{da.LowPrice}}</div>
      </div>
      <bigbox>
        <div class="c1">
          <ul>
            <li v-for="(item,index) in ddd" :key="index">{{item.Describle}}</li>
          </ul>
        </div>
         <div class="di">{{da.ShoppingRemark}}</div>
      </bigbox>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import { move_api4 } from "api/move";
export default {
  name: "shopp",
  props: ["LineId"],
  async created() {
    let arr = await move_api4(this.LineId);
    this.da = arr;
    this.ddd = arr.viewList;
    this.image = arr.viewList[0].JourneyImage;
    console.log(this.image);
  },
  async activated() {
    let arr = await move_api4(this.LineId);
    this.da = arr;
    this.ddd = arr.viewList;
    this.image = arr.viewList[0].JourneyImage;
  },
  data() {
    return {
      da: {},
      ddd: {},
      image: {}
    };
  },
 watch:{
    image(){
    this.$nextTick(() => {
      var mySwiper = new Swiper(this.$refs.ban, {
        loop: true,
        autoplay: {
          delay:1500,
          disableOnInteraction: false
        }
      });
    });
    }
  }
};
</script>

<style scoped>
.di{position:fixed;bottom: 0;}
.h {
  width: 100%;
  height: 1.47rem;
}
.c1>ul>li{font-size: .12rem;color:#666;}
.s11 {
  height: 100%;
}
.banner {
  height: 1.87rem;
  padding-top: 0.43rem;
}
.miaoshu {
  padding: 0.1rem 0.15rem 0;
  font-size: 0.16rem;
  color: #333;
  background-color: #fff;
}
.price {
  color: #ff6633;
  font-size: 0.22rem;
}
.miaoshu1 {
  display: -webkit-box;
  overflow: hidden;
  font-size: 0.16rem;
  font-weight: 500;
  line-height: 0.22rem;
  color: #333;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.c1 {
    height:6.68rem;
  margin-top: 0.1rem;
  background: #fff;
  padding-left: 0.15rem;
  color: #333;
  font-size: 0.15rem;
  font-weight: 900;
}
.c2 {
  height: 100%;
  overflow: auto;
}
</style>
