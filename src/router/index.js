import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home/home.vue';
import city from '../page/city/city.vue';
import msite from '../page/msite/msite.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/city/:id',
      name:'city',
      component: city,
    },
    {
      path: '/msite',
      name:'msite',
      component: msite,
    }
  ]
})
