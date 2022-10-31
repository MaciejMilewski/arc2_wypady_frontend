<template>
  <router-link to="/register">Zarejestruj się</router-link>
  <h1> Zaloguj się </h1>
  <form @submit.prevent="login">
    <input type='email' placeholder="Email" v-model='email'/>
    <input type='password' placeholder="Password" v-model='password'/>
    <button type="submit"> Zaloguj się </button>
  </form>

</template>

<script>
import {useStore} from 'vuex'
import {ref} from "vue";
export default {
  name: "LoginComponent",
  setup() {
    const store = useStore();
    const email = ref('')
    const password = ref('')

    function login() {
      store.dispatch('login',{email: email, password: password});
    }

    return {email, password, login}
  }
}
</script>

<style scoped>

</style>