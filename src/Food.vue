<template>
  {{ backendAnswer }}
  <form @submit.prevent="addFood" enctype="multipart/form-data">
<input type="text" placeholder="nazwa restauracji" v-model="restaurantName">
<input type="text" placeholder="nazwa" v-model="foodName">
<input type="text" placeholder="opis" v-model="description">
<input type="text" placeholder="cena" v-model="price">
    <button type="submit">Dodaj danie</button>
  </form>
</template>

<script>
let serverURL = 'https://arc2wypady-qrbx5l5nza-ey.a.run.app'
import axios from "axios";
import {mapGetters} from "vuex";
export default {
  name: "FoodComponent",
  data(){
    return {
      restaurantName: '',
      foodName: '',
      description: '',
      price: '',
      backendAnswer: '',
    }
  },
  computed: {
    ...mapGetters({User: "StateUser"})
  },
  methods: {
    addFood(){
      let restaurantName = this.$data.restaurantName;
      let foodName = this.$data.foodName;
      let description = this.$data.description;
      let price = this.$data.price;
      let username = this.User.email;
      let password = this.User.password;
      const token = `${username}:${password}`;
      const formData = new FormData()
      formData.append('restaurant',restaurantName)
      formData.append('name',foodName)
      formData.append('description',description)
      formData.append('price',price)
      // Basic authorization
      var basicAuth = Buffer.from(token).toString('base64')
      axios.post(serverURL + "/addNewFood", formData,{
        withCredentials: true,
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data",
          'Authorization': 'Basic ' + basicAuth
        }
      }).then(
          (response) => {
            this.backendAnswer = response.data
            console.log(response)
          })
          .catch((error) => {
            alert(error.message + " " + error.response.data)
          })
    }
  }
}
</script>

<style scoped>

</style>