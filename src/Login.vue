<template>
    <h1> Zaloguj się poprzez istniejące konto </h1>
    <p> <input type='text' placeholder="Email" v-model='email'/> </p>
    <p> <input type='password' placeholder="Password" v-model='password'/> </p>
    <p> <button @click="loginWithEmailAndPassword"> Wyślij </button> </p>
</template>

<script>
import {useStore} from 'vuex';
import {ref} from "vue";
export default {
  name: "LoginComponent",
  setup() {
    const store = useStore();

    const email = ref('')
    const password = ref('')

    function loginWithEmailAndPassword() {
      store.dispatch('loginWithEmailAndPassword', {email: email, password: password});
    }

    return {email, password, loginWithEmailAndPassword}
  }
}
</script>

<style scoped>

</style>