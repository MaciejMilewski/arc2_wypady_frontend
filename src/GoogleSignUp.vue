<template>
  <div v-if="!($store.state.user)">
    <LoginComponent/>
    <button @click.prevent="googleLogin">Zaloguj się za pomocą Google</button>
    <RegisterComponent/>
  </div>
  <div v-else>
    <div id="użytkownik-nazwa">Witaj, {{ User.displayName }}</div>
  </div>
</template>

<script >
import {useStore, mapGetters} from 'vuex'
import RegisterComponent from "./Register.vue";
import LoginComponent from "./Login.vue";
export default {
  name: 'GoogleSignUpComponent',
  components: {LoginComponent, RegisterComponent},
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