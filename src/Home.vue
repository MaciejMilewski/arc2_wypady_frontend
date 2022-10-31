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
    axios.get(serverURL + "/", {
      withCredentials: true,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }, {
      auth: {
        username: this.User.email,
        password: this.User.password
      }
    }).then(
        (response) => {
          this.backendAnswer = response.data
          console.log(response)
        })
  },
  computed: {
    ...mapGetters({User: "StateUser"})
  }
}
</script>

<style scoped>

</style>