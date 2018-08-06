<template>
  <div id="">
    <heads :islogo="true" :islogin="true" ></heads>
    <div class="now-in-address">
      <span class="left">当前定位城市：</span>
      <span class="right">定位不准时，请在城市列表中选择</span>
    </div>
    <div class="now-adderss">
      <span class="address">深圳</span>  <span class="icon">》</span>    <!-- 加点击跳转 -->
    </div>
    <div class="hot-title">热门城市</div>
    <ul class="hot-list">
      <router-link to="" tag="li" class="hot-item" v-for="(city,index) in hotList" :key="index">{{city.name}}</router-link>  <!-- 加点击跳转 -->
    </ul>
    <div class="all-city-box">
      <div class="all-city-title">A</div>
      <ul class="all-city-list">
        <router-link to="" tag="li" class="all-city-item">
          长沙
        </router-link>
        <router-link to="" tag="li" class="all-city-item">
          长沙
        </router-link>
        <router-link to="" tag="li" class="all-city-item">
          长沙
        </router-link>
        <router-link to="" tag="li" class="all-city-item">
          长沙
        </router-link>
        <router-link to="" tag="li" class="all-city-item">
          长沙12
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import heads from '../../components/heads/heads';
import {post,fetch,patch,put} from '../../config/fetch.js'
export default {
  name: 'home',
  data() {
    return {
      nowCity:'',
      nowCityId: '',
      hotList: '',
      allList: ''
    }
  },
  computed: {

  },
  methods: {

  },
  mounted() { 
    this.nowCity = '深圳';
    this.nowCityId = 11;
    
    fetch("/v1/cities",{type:"group"}).then((res)=>{
      console.log(res);
    });
  },
  components: {
    heads,
  }
  
  
}
</script>

<style lang="less">
.now-in-address {
  height: 1.1rem;
  line-height: 1.4rem;
  border: 1px solid #f1f1f1;
  padding: 0 0.3rem;
  background: #fff;
  .left {
    float: left;
    font-size: 0.4rem;
  }
  .right {
    float: right;
    font-size: 0.32rem;
    line-height: 1.5rem;
    color: #e2e2e2;
  }
}
.now-adderss {
  height: 1.1rem;
  line-height: 1.1rem;
  font-size: 0.5rem;
  color: #3190E8;
  text-align: left;
  border-bottom: 2px solid #f1f1f1;
  position: relative;
  margin-bottom: 0.3rem;
  background: #fff;
  .address {
    position: absolute;
    left: 0.3rem;
    top: 0;
  }
  .icon {
    position: absolute;
    right: 0.2rem;
    top: 0;
  }
}
.hot-title {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.4rem;
  border-top: 2px solid #f1f1f1;
  border-bottom: 2px solid #f1f1f1;
  background: #fff;
  text-indent: 0.3rem;
}
.hot-list {
  font-size: 0;
  border-bottom: 1px solid #f1f1f1;
  background: #fff;
  .hot-item {
    display: inline-block;
    width: 25%;
    height: 1.1rem;
    line-height: 1.1rem;
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    font-size: 0.4rem;
  }
}
.all-city-title {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.4rem;
  border-top: 2px solid #f1f1f1;
  border-bottom: 2px solid #f1f1f1;
  margin-top: 0.3rem;
  background: #fff;
  text-indent: 0.3rem;
}
.all-city-list {
  font-size: 0;
  border-bottom: 1px solid #f1f1f1;
  background: #fff;
  .all-city-item {
    display: inline-block;
    width: 25%;
    height: 1.1rem;
    line-height: 1.1rem;
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    font-size: 0.4rem;
  }
}
</style>
