<template>
  <div v-if="!($store.state.user)">
    <button @click.prevent="googleLogin">Zaloguj się za pomocą Google</button>
  </div>
  <div v-else>
    <div id="użytkownik-nazwa">Witaj, {{ User.displayName }}</div>
  </div>
</template>

<script >
import {useStore, mapGetters} from 'vuex'
export default {
  name: 'GoogleSignUpComponent',
  computed: {
    ...mapGetters({User: "StateUser"})
  },
  setup() {
    const store = useStore();

    //
    function googleLogin() {
      store.dispatch('login');
    }

      return {
        googleLogin
      }
  }

}

</script>

<style scoped>

</style>