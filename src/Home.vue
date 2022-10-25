<template>
<div>Wypady!</div>
  <div id="użytkownik-nazwa">Witaj, {{User.displayName}}!</div>
  <div><img :src="User.photoURL"></div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Home",
  computed: {
    ...mapGetters({User: "StateUser"})
  }
}
</script>

<style scoped>

</style>