import {CHANGECOUNT} from './mutations-type.js';
export default {
  [CHANGECOUNT]: (state)=>{
    console.log(123);
    state.count = state.count + '陈宇环';
  },
};