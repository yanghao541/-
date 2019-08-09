<template>
  <div class="tou1">
    <div class="top">
      <Header />
    </div>
    <!-- 身 -->
    <div class="center" ref="tou">
      <!-- better-scroll 添加标记 -->
      <bigbox ref="shuaxin">
        <div class="a10">
          <img
            class="a7"
            src="https://ossweb-img.qq.com/upload/adw/image/20190808/1b896b23e80acbbdb25e32424b305666.jpeg"/>
          <ul class="a8">
            <li>{{cityname}}</li>
          </ul>
          <ul class="a9">
            <li v-for="(item,index) in List" :key="index">{{item.DestinationCityName}}</li>
          </ul>
          <div class="a3">
            <h3 class="a4">出境热推</h3>

            <div class="a5">
              <ul>
                <v-touch
                  tag="li"
                  v-for="(item,index) in List"
                  :key="index"
                  @tap="details(item.LineId)"
                >
                  <img class="a6" :src="item.ImagePath" />
                </v-touch>
              </ul>
            </div>
          </div>

          <div class="q">
            <ul class="q1">
              <li>热门推荐</li>
              <li>免签</li>
            </ul>
            <ul class="q2">
              <li>热推</li>
              <li>泰国</li>
              <li>巴厘岛</li>
              <li>缅甸</li>
            </ul>
            <v-touch
              v-for="(item,index) in List"
              :key="index"
              tag="div"
              @tap="details(item.LineId)"
            >
              <img :src="item.ImagePath" class="z1" />
              <div class="z3">
                <a class="z4">{{item.MainTitle}}</a>
                <br />
                <span class="z2">{{item.SubTitle}}</span>
              </div>
            </v-touch>
          </div>
        </div>
      </bigbox>
    </div>
    <v-touch class="s1" tag="div" @tap="shang()">^</v-touch>
  </div>
</template>


<script>
import { move_api, move_api2 } from "api/move";
import { mapState } from "vuex";

export default {
  name: "yh1",
  computed: {
    ...mapState({
      cityname: state => state.city.cityname,
      cityid: state => state.city.cityid
    })
  },
  async created() {
    // 如果内存没有就获取 别且添加进去
    if (!sessionStorage.getItem("haha")) {
      let data = await move_api(this.cityid);
      this.List = data;
      console.log(data)
      sessionStorage.setItem("haha", JSON.stringify(data));
    }
  },
  async activated() {
    // console.log(this.List.)
    if (this.a != this.cityid) {
      let data = await move_api(this.cityid);
      this.List = data;
      sessionStorage.setItem("haha", JSON.stringify(data));
      this.a = this.cityid;
    }
  },
  data() {
    return {
      //  内存有就获取
      List: JSON.parse(sessionStorage.getItem("haha")) || [],
      a: -1,
    };
  },
  methods: {
    shang() {
      this.$refs.tou.scrollTo(0, 0, 1500);
    },
    //  点击跳详情页
    details(LineId) {
      // 编程导航 路由跳转至 shopp params带id
      this.$router.push({ name: "shopp", params: { LineId } });
    }
  },
  mounted() {
    // 让这个父组件better-scroll 执行 下拉刷新这个方法
    //  当下拉是执行里面的函数   这个例子 函数只是执行重新赋值
    this.$refs.shuaxin.handDown(async () => {
      let n = parseInt(Math.random() * 8);
      let a = [321, 70, 394, 91, 199, 324, 322, 248];
      let data2 = await move_api2(a[n]);
      this.List = data2;
      sessionStorage.setItem("haha", JSON.stringify(data2));
      // 数据刷新完毕 告知系统 取消类似防抖事件
      this.$refs.shuaxin.gaosu();
    });
  }
};
</script>

<style  scoped>
.a10 {
  height: 22rem;
}
/* 头 */
.tou1 {
  height: 100%;
  background: white;
}
.top {
  background: white;
  z-index: 10;
  width: 100%;
  height: 0.44rem;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
}

/* 底部 */
.center {
  padding-top: 0.43rem;
  height: 100%;
  overflow: auto;
}
.a3 {
  height: 1.63rem;
  width: 100%;
  padding-top: 0.15rem;
}
.a4 {
  margin-left: 0.14rem;
}
.a5 {
  z-index: 1;
  overflow: hidden;
  height: 1.2rem;
  width: 100%;
}
.a5 > ul {
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  font-size: 0;
  white-space: nowrap;
  background-color: #fff;
}
.a5 > ul > li {
  overflow: hidden;
  width: 1.07rem;
  display: inline-block;
  margin: 0.1rem 0.05rem;
}
.a6 {
  height: 0.9rem;
  width: 1.07rem;
  margin: 0.1rem 0.05rem;
  background: black;
  float: left;
}
.a7 {
  width: 3.75rem;
  height: 1.58rem;
}
.a8 {
  display: flex;
  height: 0.4rem;
}
.a8 > li {
  flex: 1;
  text-align: center;
  line-height: 0.4rem;
  color: #23beae;
  font-size: 0.18rem;
}

.a9 {
  width: 3.75rem;
  height: 1rem;
}
.a9 > li {
  width: 1rem;
  height: 0.3rem;
  float: left;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 0.3rem;
  margin: 0.06rem 0.1rem;
}

.q {
  width: 3.75rem;
  height: 9.9rem;
  border-top: 0.1rem solid #ccc;
}
.q1 {
  padding: 0 0.51rem;
  width: 3.75rem;
  height: 0.4rem;
}
.q1 > li {
  width: 1.31rem;
  height: 0.4rem;
  text-align: center;
  line-height: 0.4rem;
  float: left;
}
.q1 li:hover {
  color: #23beae;
  border-bottom: 1px solid #23beae;
}
.q2 > li {
  flex: 1;
  margin: 0.05rem;
  width: 0.78rem;
  height: 0.29rem;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 0.29rem;
}
.q2 {
  display: flex;
}

.z1 {
  width: 3.75rem;
  height: 1.83rem;
}
.z2 {
  width: 3.53rem;
  height: 0.12rem;
  font-size: 12px;
  line-height: 12px;
  color: #999;
}
.z3 {
  width: 3.75rem;
  height: 0.87rem;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0.13rem 0.11rem;
  white-space: nowrap;
}
.z4 {
  font-size: 16px;
  line-height: 16px;
  color: #333;
}

.s1 {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  position: fixed;
  background: white;
  bottom: 0.95rem;
  right: 0.15rem;
  font-size: 0.5rem;
  text-align: center;
  line-height: 0.6rem;
}
</style>
