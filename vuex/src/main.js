import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // 引入 store

Vue.config.productionTip = false

new Vue({
  router,
  store, // 挂载在 Vue 实例上
  render: h => h(App)
}).$mount('#app')
