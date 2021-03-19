import Vue from 'vue'
import VueRouter from 'vue-router'
import State from '../views/State.vue'
import Getter from '../views/Getter.vue'
import Mutation from  '../views/Mutation.vue'
import Action from  '../views/Action.vue'
import MapFunctions from  '../views/MapFunctions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'State',
    component: State
  }, {
    path: '/getter',
    name: 'Getter',
    component: Getter
  }, {
    path: '/mutation',
    name: 'Mutation',
    component: Mutation
  }, {
    path: '/action',
    name: 'Action',
    component: Action
  }, {
    path: '/mapFunctions',
    name: 'MapFunctions',
    component: MapFunctions
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
