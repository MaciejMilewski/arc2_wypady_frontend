<template>
  <h1> Create an Account </h1>
  <p> <input type='text' placeholder="Email" v-model='email'/> </p>
  <p> <input type='password' placeholder="Password" v-model='password'/> </p>
  <p> <button @click="register"> Submit </button> </p>
</template>

<script>
import {useStore} from 'vuex';
import {ref} from "vue";
export default {
  name: "RegisterComponent",
  setup() {
    const store = useStore();

    const email = ref('')
    const password = ref('')

    function register() {
      store.dispatch('register', {email: email, password: password});
    }

    return {email, password, register}
  }
}
</script>

<style scoped>

</style>