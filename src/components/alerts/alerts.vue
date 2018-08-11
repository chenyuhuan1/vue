<template>
  <div class="alert" v-if="msg != ''">{{msg}}</div>
</template>

<script>
  import heads from '../../components/heads/heads.vue'
  import {fetch} from '../../config/fetch.js';
  import {setSession,getSession,removeSession} from '../../config/mconfig.js'
  export default {
    props: {
      msg: {
        tyep: String,
        default: '',
      }
    },
    data() {
      return {
        show: true,
      }
    },
    mounted() {
      
    },
  }
</script>

<style lang="less">
  .alert {
    padding: 0.2rem 0.3rem;
    background: rgba(0, 0, 0, 0.8);
    font-size: 0.4rem;
    color: #fff;
    border-radius: 0.1rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

</style>
