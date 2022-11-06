<template>
  <div>{{ backendAnswer }}</div>
</template>

<script>
import axios from "axios";
import {mapGetters} from 'vuex'

let serverURL = 'https://arc2wypady-qrbx5l5nza-ey.a.run.app'
export default {
  name: "Home",
  data(){
    return {
      backendAnswer: ''
    }
  },
  mounted() {
    setTimeout(()=> {
      var username = this.User.email;
      var password = this.User.password;
      const token = `${username}:${password}`;
      var basicAuth = Buffer.from(token).toString('base64')
      axios.get(serverURL + "/", {
        withCredentials: true,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Basic ' + basicAuth
        }
      },).then(
          (response) => {
            this.backendAnswer = response.data
            console.log(response)
          })
    }, 1000)

  },
  computed: {
    ...mapGetters({User: "StateUser"})
  }
}
</script>

<style scoped>

</style>