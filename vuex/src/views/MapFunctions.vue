<template>
  <div>
    <h1>vuex 提供辅助函数，减少重复代码，更方便的使用</h1>
    <p>获取state中的point: {{ point }}</p>
    <hr>
    <p>对 state 的数据处理后展示</p>
    <p>{{ filterNumbers.join()}}</p>
    <p>{{ newFilterNumbers.join()}}</p>
    <hr>
    <p>同步执行，改变 store 中的数据 </p>
    <button @click="add">+</button>
    <p>{{ count }}</p>
    <hr>
    <p>异步执行，改变 store 中的数据</p>
    <button @click="asyncAction">操作的方法名和 action 的方法名称不同</button>
    <p>{{ moment }}</p>
    <button @click="changeAsyncSamn">操作的方法名和 action 的方法名称想同</button>
    <p>{{ sam }}</p>
  </div>
</template>

<script>
// 分别引入辅助函数
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "MapFunctions",
  computed: {
    // 使用 mapState 辅助函数
    ...mapState(['point', 'count', 'moment', 'sam']),

    // 通过 mapGetters 辅助函数将 store 中的 getter 映射到局部计算属性
    ...mapGetters(['filterNumbers']), // 使用同一个名字则直接使用数组作为参数
    ...mapGetters({ newFilterNumbers: 'filterNumbers' })// 若使用自定义名字，则使用对象作为参数
  },
  methods: {
    //  将 `this.add()` 映射为 `this.$store.commit('addCount')`
    ...mapMutations({ add: 'addCount' }),

    // 将 `this.asyncAction()` 映射为 `this.$store.dispatch('changeAsynMoment')`，
    ...mapActions({ asyncAction: 'changeAsynMoment'}),

    // 若映射的两者名字相同，可改成数组且使用一个名称即可, mutation 同理
    ...mapActions(['changeAsyncSamn'])

  }
}
</script>

<style scoped>

</style>
