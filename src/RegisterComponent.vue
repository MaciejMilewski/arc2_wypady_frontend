<template>

  <button @click="signInWithGoogle">Zaloguj się za pomocą Google</button>


</template>

<script setup>
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

let user = {}
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
  .then((result) => {
    user = result.user;
    console.log(user);

  })
      .catch((error) => {
        //error
        console.log("ERROR:", error);
      })
  console.log(user);
}

</script>

<style scoped>

</style>