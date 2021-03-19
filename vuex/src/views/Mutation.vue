<template>
  <div>
    <h1>在组件内，只能读取store的数据，过提交mutations来改变store中数据,并且 mutation 是同步执行</h1>
    <p>{{count}}</p>
    <button @click="add">+</button>
    <hr>
    <button @click="addDoube">*</button>
  </div>
</template>

<script>
export default {
  name: "mutation",
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    add() {
      this.$store.commit('addCount');
    },
    addDoube() {
      this.$store.commit('addCountDoube', 2);
    }
  }
}
</script>
