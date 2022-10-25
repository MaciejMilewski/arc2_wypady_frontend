<template>
    <h1> Zaloguj się poprzez istniejące konto </h1>
    <p> <input type='text' placeholder="Email" v-model='email'/> </p>
    <p> <input type='password' placeholder="Password" v-model='password'/> </p>
    <p> <button @click="loginWithEmailAndPassword"> Wyślij </button> </p>
</template>

<script>
import axios from 'axios';
import {ref} from "vue";
export default {
  name: "LoginComponent",
  setup() {

    const email = ref('')
    const password = ref('')

    function loginWithEmailAndPassword() {
      axios.post("http://localhost:8848/register",{email: email.value, password: password.value})
          .then((response) => {
            console.log(response)
          })
    }

    return {email, password, loginWithEmailAndPassword}
  }
}
</script>

<style scoped>

</style>