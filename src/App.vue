<template>
  <div id="nav" v-if="$store.state.user">
    <router-link to="/">Start</router-link> |
    <router-link to="/addRestaurant">Add a new restaurant</router-link> |
    <router-link to="/addFood">Add a new Food</router-link>
    <button @click="$store.dispatch('logout')">Wyloguj</button>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
