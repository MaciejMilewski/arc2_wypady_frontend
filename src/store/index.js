import { createStore } from 'vuex'
import router from '@/router'
import { auth } from '@/firebase'
import {
    getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword
} from 'firebase/auth'

export default createStore({
    state: {
        user: null
    },
    getters: {
      StateUser: (state) => state.user
    },
    mutations: {

        SET_USER (state, user) {
            state.user = user
        },

        CLEAR_USER (state) {
            state.user = null
        }

    },
    actions: {
        async login ({ commit }) {

           const provider = new GoogleAuthProvider();
            signInWithPopup(getAuth(), provider)
                .then((result) => {
                    console.log(result);
                    commit('SET_USER', auth.currentUser)
                })

           await router.push('/')
        },

        async register ({ commit }, payload) {
            console.log(payload);
            console.log("^ commit");
            console.log(commit);
            createUserWithEmailAndPassword(getAuth(),payload.email.value, payload.password.value) // need .value because ref()
                .then((data) => {
                    console.log(data)
                    router.push('/') // redirect to the feed
                })
                .catch(error => {
                    console.log(error.code)
                    alert(error.message);
                });
        },

        // async register ({ commit}, details) {
            // const { email, password } = details
            //
            // try {
            //     await createUserWithEmailAndPassword(auth, email, password)
            // } catch (error) {
            //     switch(error.code) {
            //         case 'auth/email-already-in-use':
            //             alert("Email already in use")
            //             break
            //         case 'auth/invalid-email':
            //             alert("Invalid email")
            //             break
            //         case 'auth/operation-not-allowed':
            //             alert("Operation not allowed")
            //             break
            //         case 'auth/weak-password':
            //             alert("Weak password")
            //             break
            //         default:
            //             alert("Something went wrong")
            //     }
            //
            //     return
            // }
            //
            // commit('SET_USER', auth.currentUser)
            //
            // router.push('/')
        // },

        async logout ({ commit }) {
            await signOut(auth)

            commit('CLEAR_USER')

            await router.push('/login')
        },

        fetchUser ({ commit }) {
            auth.onAuthStateChanged(async user => {
                if (user === null) {
                    commit('CLEAR_USER')
                } else {
                    commit('SET_USER', user)

                    if (await router.isReady() && router.currentRoute.value.path === '/login') {
                        await router.push('/')
                    }
                }
            })
        }

    }
})