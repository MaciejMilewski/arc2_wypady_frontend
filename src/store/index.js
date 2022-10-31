import {createStore} from 'vuex'
import router from '@/router'
import axios from "axios";

let serverURL = 'https://arc2wypady-qrbx5l5nza-ey.a.run.app'
export default createStore({
    state: {
        user: null
    },
    getters: {
        StateUser: (state) => state.user
    },
    mutations: {

        SET_USER(state, user) {
            state.user = user
        },

        CLEAR_USER(state) {
            state.user = null
        }

    },
    actions: {
        async login({commit}, payload) {
            console.log(commit)
            const email = payload.email
            const password = payload.password
            axios.post(serverURL+"/login", {email: email.value, password: password.value})
                .then((response) => {
                    console.log(response)
                    commit('SET_USER',response.data)
                    router.push('/')
                })
                .catch((error) => {
                    alert(error.message + " " + error.response.data)
                })
        },


        async register({commit}, payload) {
            console.log(commit)
            const email = payload.email
            const password = payload.password
            axios.post(serverURL + "/register", {email: email.value, password: password.value})
                .then((response) => {
                    alert(response.data + " (" + response.status+")")
                })
                .catch((error) => {
                    console.log(error);
                    alert(error.message + " " + error.response.data);
                })

        },

        async logout({commit}) {
            commit('CLEAR_USER')
            await router.push('/login')
        },
    }
})