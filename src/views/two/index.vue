<template>
  <div class="x1">
    <!-- 头 公共组件 -->
    <Header />
    <div class="bot1">
      <!-- 搜索框 -->
      <div class="search">
        <input type="text"  v-model="txt"/>
      </div>

      <!-- 交通 -->

      <div class="traffic jt">
        <div>电影名</div>
        <ul>
         <li v-for="(item,index) in txtlist" :key="index">{{item.nm}}</li>

        </ul>
      </div>

      <div class="traffic">
        <div>上映时间</div>
        <ul>
          <li v-for="(item,index) in txtlist" :key="index">{{item.pubDesc}}</li>
        </ul>
      </div>

      <div class="traffic">
        <div>主演</div>
        <ul>
          <li v-for="(item,index) in txtlist" :key="index">{{item.star}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { seach } from "api/move";
import { mapState } from "vuex";
export default {
  name: "two",
  data() {
    return {
      // 等于input搜索的内容
      txt: "",
      // 搜索到的数组
      txtlist:[]
    };
  },
  computed: {
    ...mapState({
      cityId:state => state.city.cityId
    })
  },
  watch: {
    // 侦听  data=端口（vuex里面id，input输入的值）
    // 搜索到的数组等于 这个值 如果没有就等于空（三木）
    async txt(newVal, oldVal) {
      let data = await seach(this.cityId, newVal);
      console.log(this.txtlist);
      this.txtlist = data.data.movies ? data.data.movies.list:[];
    }
  }
};
</script>

<style  scoped>
.x1 {

  height: 100%;
}
/* 搜索框 */

.bot1 {
  background: white;
  padding-top: 0.43rem;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.search {
  width: 100%;
  height: 0.52rem;
  padding: 0.1rem 0.15rem;
}
.search > input {
  width: 100%;  box-shadow:10px 10px 5px #888888;
  height: 0.32rem;
  background:deepskyblue;
  color: #999;
  border-radius: 0.53333rem;
  border: none;
  outline: medium;
}

/* 交通 */
.jt {
  border-top: 0.01333rem solid #e9ecf1;
}
.traffic {
  border-bottom: 0.1rem solid rgb(231, 231, 231);float: left;width: 100%;
}
.traffic > div {
  margin-top: 0.15rem;
  color: #444;
  line-height: 0.19rem;
  font-size: 0.16rem;
  font-weight: 700;
  padding-left: 0.12rem;
  border-left: 0.03rem solid #02c6cd;
}
.traffic > ul {
  padding: 0.15rem 0.05rem 0.05rem 0.15rem;
}
.traffic > ul > li {
  box-shadow:10px 10px 5px #888888;
  margin: 0 0.1rem 0.1rem 0;
  float: left;
  line-height: 0.3rem;
  text-align: center;
  color: #333;
  font-size: 0.12rem;
  background: #f5f5f5;
}
</style>












