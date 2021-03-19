<template>
  <div>
    <h1>若想实现异步执行，则 mutation 还需搭配 action 来实现</h1>
    <button @click="asyncAction">异步ing...</button>
    <p>{{moment}}</p>
  </div>
</template>

<script>
export default {
  name: "action",
  computed: {
    moment() {
      return this.$store.state.moment;
    }
  },
  methods: {
    asyncAction() {
      this.$store.dispatch('changeAsynMoment');
    }
  }
}
</script>

<style scoped>

</style>
