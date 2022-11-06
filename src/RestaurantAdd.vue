<template>
<div>
  <img id="ikona" :src="image.previewImage"/>
  {{backendAnswer}}
  <form @submit.prevent="addRestaurant" enctype="multipart/form-data">
    <input type="file"
           name="file"
           ref="imageInput"
           @input="submitImage(this.$refs.imageInput)"
    >
    <input type="text" name="name"
           placeholder="nazwa restauracji"
           v-model="name"
    >
    <div style="display: block">
    </div>
    <button type="submit">Dodaj restaurację</button>
  </form>
</div>
</template>

<script>
import {reactive, toRefs} from "vue";
import axios from "axios";
import {mapGetters} from "vuex";
let serverURL = 'https://arc2wypady-qrbx5l5nza-ey.a.run.app'
export default {
  name: "RestaurantAdd",
  props: {
    imageObject: {},
  },
  setup(props,context){
    const state = reactive({
      image: {
        previewImage: '',
        imageName: '',
        imageInput: null,
        file: null
      },
    })
    function submitImage(ref) {
        let file = ref.files
        this.image.imageInput = ref
        //Sprawdzenie czy jest określona zmienna i czy zawiera element zerowy - nasze zdjęcie
        if (file && file[0]) {
          this.image.file = file[0]
          //Wykorzystanie obiektu FileReader w celu załadowania zawartości zdjęcia
          let fileReader = new FileReader();
          fileReader.onload = fR => {
            this.image.previewImage = fR.target.result
          }
          fileReader.readAsDataURL(file[0])
          context.emit('input', file[0])
          fetch(this.image.previewImage).then(res => res.blob()).then(blob => console.log(blob))
        }

        context.emit('update:imageObject', state.image)
      }

    return {
      ...toRefs(state),
      submitImage,
    }
  },
  methods: {
    addRestaurant(){
      let nameValue = this.$data.name;
      var username = this.User.email;
      var password = this.User.password;
      const token = `${username}:${password}`;
      const formData = new FormData()
      formData.append('file',this.image.file)
      formData.append('name',nameValue)
      //Basic authorization
      var basicAuth = Buffer.from(token).toString('base64')
      axios.post(serverURL + "/addNewRestaurant", formData,{
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
  },
  data(){
    return {
      name: '',
      menu: '',
      backendAnswer: '',
    }
  },
  computed: {
    ...mapGetters({User: "StateUser"})
  }
}
</script>

<style scoped>
#ikona {
  width: 100px;
}
#dodaj-menu {
  border: 1px solid red;
  padding: 10px;

}
</style>