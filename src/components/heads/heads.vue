<template>
  <div class="heads">
    <span class="head-back" v-if="isback">《</span>  
    <span class="head-logo" v-if="islogo">ele.me</span>
    <h2 class="head-title" v-if="headTitle != ''">{{headTitle}}</h2>
    <span class="head-resig-login" v-if="islogin">登录|注册</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    isback: {
      type: Boolean,
      default: false
    },
    islogo: {
      type: Boolean,
      default: false
    },
    islogin: {
      type: Boolean,
      default: false
    },
    headTitle: {
      type: String,
      default: ''
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="less">
  .heads {
    width: 100%;
    height: 1.2rem;
    background: #3190E8;
    position: relative;
    .head-back {
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 0.4rem;
      color: #fff;
      position: absolute;
      left: 0.2rem;
      top: 0;
      padding: 0 0.2rem;
      margin: 0 -0.2rem;
    }
    .head-logo {
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 0.4rem;
      color: #fff;
      position: absolute;
      left: 0.2rem;
      top: 0;
    }
    .head-resig-login {
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 0.4rem;
      color: #fff;
      position: absolute;
      right: 0.2rem;
      top: 0;
    }
    .head-title {
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 0.5rem;
      color: #fff;
      text-align: center;
    }
  }
</style>
