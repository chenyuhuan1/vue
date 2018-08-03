import {CHANGECOUNT} from './mutations-type.js';
export default {
  changecount({commit,state}) {
    setTimeout(()=>{
      commit(CHANGECOUNT);
    },2000);
  }
};