
<template>
  <div>
    <h1>获取共享状态的数据</h1>
    <p>count: {{ count }}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    // 通过组件的计算属性来保存state里面的值
    count() {
      return this.$store.state.count;
    },
  }
}
</script>
