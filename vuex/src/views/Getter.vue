<template>
  <div>
    <h1>对共享状态的某一个属性进行处理</h1>
    <p>{{ numbers.join() }}</p>
  </div>
</template>

<script>
export default {
  name: "getter",
  computed: {
    // 先把数据获取后再在组件的计算属性中处理
    numbers() {
      return this.$store.state.numbers.filter((item) => {
        return item > 3;
      });
    },

    // 使用 getter 属性
    filterNumbers() {
      return this.$store.getters.filterNumbers;
    },
  }
}
</script>
