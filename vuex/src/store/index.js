import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    point: 2,
    numbers:[0,1,2,3,4,5,6,7,8],
    getNumbers:[9,10,11,12,13,14],
    moment: '准备异步',
    sam: '即将异步'
  },

  getters: {
    filterNumbers(state) {
      return state.getNumbers.filter((item) => {
        return item > 3;
      })
    }
  },

   // 每个 mutation 都有一个字符串的事件类型 (type) 和 一个 回调函数 (handler)，且回调函数默认第一个接收参数为 state，后面的参数为自定义
  mutations: {
    addCount(state) {
      state.count++;
    },
    addCountDoube(state, n) {
      state.count = state.count * n;
    },
    changeMoment(state) {
      state.moment = '已过2秒，异步成功！';
    },
    changeSam(state) {
      state.sam = '已过1秒，异步成功！';
    }
  },

  actions: {
    changeAsynMoment(context) {
      setTimeout(() => {
        context.commit('changeMoment');
      }, 2000);
    },
    changeAsyncSamn(context) {
      setTimeout(() => {
        context.commit('changeSam');
      })
    }
  },

  modules: {
  }
})
