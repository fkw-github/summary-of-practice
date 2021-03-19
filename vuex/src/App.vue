<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-item" to="/">state</router-link>
      <router-link class="nav-item" to="/getter">getter</router-link>
      <router-link class="nav-item" to="/mutation">mutation</router-link>
      <router-link class="nav-item" to="/action">action</router-link>
      <router-link class="nav-item" to="/mapFunctions">mapFunctions</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  margin: 0 auto;
  max-width: 1000px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  display: flex;
  flex-direction: row;
}
#nav .nav-item {
  flex: 1;
  font-size: 48px;
  text-align: center;
  text-decoration: none;
  color: lightseagreen;
}
</style>
