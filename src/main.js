import { createApp } from 'vue'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaqZ9EUdeyV_MfGysYkflwEz99u0vQaMU",
    authDomain: "wypady-35163.firebaseapp.com",
    projectId: "wypady-35163",
    storageBucket: "wypady-35163.appspot.com",
    messagingSenderId: "996194261421",
    appId: "1:996194261421:web:d23ab09eb2afabbfcbe924"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)
app.mount('#app');
