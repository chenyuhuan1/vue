import vue from 'vue';
import vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
vue.use(vuex);

const state = {
  count: 123,
};

export default new vuex.Store ({
  state,
  mutations,
  actions,
  getters,
});