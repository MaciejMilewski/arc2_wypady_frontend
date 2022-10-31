<template>
  <router-link to="/login">Zaloguj się</router-link>
    <h1> Zarejestruj się </h1>
  <form @submit.prevent="register">
   <input type='email' placeholder="Email" v-model='email'/>
    <input type='password' placeholder="Password" v-model='password'/>
   <button type="submit"> Wyślij </button>
  </form>

</template>

<script>
import {useStore} from 'vuex'
import {ref} from "vue";
export default {
  name: "RegisterComponent",
  setup() {
    const store = useStore();
    const email = ref('')
    const password = ref('')

    function register() {
      store.dispatch('register',{email: email, password: password});
    }

    return {email, password, register}
  }
}
</script>

<style scoped>

</style>