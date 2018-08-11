<template>
  <div class="city">
    <heads :isback="true" :headTitle="cityName" :changeCity="true"></heads>
    <div class="form-box">
      <input class="cityinput" type="text" v-model="inputValue">
      <button class="sub" @click="submits()" >提交</button>
    </div>
    <p class="hisTitle" v-if="SearchList.length>0 && isHisList">搜索历史</p>
    <ul class="SearchList" v-for="(l,index) in SearchList" :key="index" v-if="SearchList.length>0">
      <li class="item" @click="goShop(l)">
        <p class="name">{{l.name}}</p>
        <p class="address">{{l.address}}</p>
      </li>
    </ul>
    <p class="clearAll" v-if="SearchList.length>0 && isHisList" @click="clearAll()">清除所有记录</p>
    <p class="noData" v-if="noData" >暂无搜索结果！</p>
    <alerts :msg="'alertMsg'"></alerts>
  </div>
</template>

<script>
  import heads from '../../components/heads/heads.vue'
  import {fetch} from '../../config/fetch.js';
  import {setSession,getSession,removeSession} from '../../config/mconfig.js'
  import alerts from '../../components/alerts/alerts.vue'
  export default {
    data() {
      return {
        cityId: '',
        cityName: '',
        inputValue: '',
        SearchList: [],
        isHisList: false,
        noData: false,
        alertMsg: '',
      }
    },
    methods: {
      submits() {
        if (this.inputValue == ''){
          alert("请输入搜索条件！");
          return ;
        }
        fetch('/v1/pois',{type: 'search',city_id: this.cityId,keyword: this.inputValue}).then((res) => {
          this.SearchList = res;
          if(res.length == 0) {
            this.noData = true;
          }
        });
      },
      goShop(l) {   //点击搜索结果
        //跳转前存sission记录
        var hisShopList = getSession('hisShopList');
        var isHava = false;
        if (hisShopList != null) {
          for (var i = 0; i < hisShopList.length; i++) {
            if (JSON.stringify(hisShopList[i]) == JSON.stringify(l)) {   //sesion里不存在此对象在存
              isHava = true;
            }
          }
          if (!isHava) {
            hisShopList = [l,...hisShopList];
          }
        }else {
          hisShopList = [l];
        }
        setSession('hisShopList',hisShopList);
        this.$router.push({path:'/msite',query:{geohash:l.geohash}});
      },
      clearAll() {  //清理历史记录
        removeSession('hisShopList');
        this.SearchList = [];
      }
    },
    mounted() {
      this.cityId = this.$route.params.id;
      fetch('/v1/cities/'+this.cityId,{}).then((res) => {
        this.cityName = res.name;
      });
      if (getSession('hisShopList')!=null) {
        this.SearchList = getSession('hisShopList');
        this.isHisList = true;
      }
    },
    components: {
      heads,
      alerts,
    }
  }
</script>

<style lang="less">
  .city {
    padding-top: 1.2rem;
    .form-box {
      padding: 0.2rem 0;
      background: #fff;
      border-top: 1px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;
      margin-top: 0.2rem;
    }
    .cityinput {
      width: 7.4rem;
      display: block;
      border: 1px solid #e4e4e4;
      font-size: 0.4rem;
      padding: 0 0.3rem;
      height: 0.8rem;
      color: #333;
      margin: 0 auto;
    }  
    .sub {
      display: block;
      width: 8rem;
      margin: 0 auto;
      background-color: #3190e8;
      font-size: 0.45rem;
      color: #fff;
      border-radius: 0.1rem;
      margin-top: 0.2rem;
      height: 1rem;
    }
    .hisTitle {
      text-indent: 0.2rem;
    }
    .SearchList {
      background: #fff;
      border-top: 1px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;
      .item {
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        padding: 0.3rem 0 0.5rem 0.3rem;
      }
      .name {
        font-size: 0.5rem;
        padding: 0.1rem 0;
        color: #111;
      }
      .address {
        font-size: 0.3rem;
        color: #999;
      }
    }
    .clearAll,.noData {
      height: 1.2rem;
      font-size: 0.4rem;
      line-height: 1.2rem;
      text-align: center;
      color: #999;
      background: #fff;
      border-bottom: 2px solid #e4e4e4;
    }
  }

</style>
