import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import findMusicComponent from '../view/findMusicPage/findMusicComponent.vue'

import recommend from '../view/findMusicPage/navController/recommend.vue'
import rank from '../view/findMusicPage/navController/rank.vue'
import list from '../view/findMusicPage/navController/list.vue'
import radio from '../view/findMusicPage/navController/radio.vue'
import singer from '../view/findMusicPage/navController/singer.vue'
import newdisc from '../view/findMusicPage/navController/newdisc.vue'

import hyComponent from '../view/findMusicPage/navController/recommend/musicTypeController/hyMusic.vue'
import gtComponent from '../view/findMusicPage/navController/recommend/musicTypeController/gtMusic.vue'
import rhComponent from '../view/findMusicPage/navController/recommend/musicTypeController/rhMusic.vue'
import omComponent from '../view/findMusicPage/navController/recommend/musicTypeController/omMusic.vue'

import myMusicComponent from '../view/myMusicComponent.vue'
import friendComponent from '../view/friendComponent.vue'
import musicShopComponent from '../view/musicShopComponent.vue'
import musicManComponent from '../view/musicManComponent.vue'
import downLoadComponent from '../view/downLoadComponent.vue'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    {
      path: '/findMusicComponent',
      name: 'findMusicComponent',
      component: findMusicComponent,
      children: [
        {
          path: '/',
          name: 'recommend',
          component: recommend,
        },
        {
          path: 'rank',
          name: 'rank',
          component: rank
        },
        {
          path: 'list',
          name: 'list',
          component: list
        },
        {
          path: 'radio',
          name: 'radio',
          component: radio
        },
        {
          path: 'singer',
          name: 'singer',
          component: singer
        },
        {
          path: 'newdisc',
          name: 'onewdisc',
          component: newdisc
        }
      ]
    },
    {
      path: '/myMusicComponent',
      name: 'myMusicComponent',
      component: myMusicComponent
    },
    {
      path: '/friendComponent',
      name: 'friendComponent',
      component: friendComponent
    },
    {
      path: '/musicShopComponent',
      name: 'musicShopComponent',
      component: musicShopComponent
    },
    {
      path: '/musicManComponent',
      name: 'musicManComponent',
      component: musicManComponent
    },
    {
      path: '/downLoadComponent',
      name: 'downLoadComponent',
      component: downLoadComponent
    }
  ]
})

