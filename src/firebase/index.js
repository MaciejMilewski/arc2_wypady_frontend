import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAaqZ9EUdeyV_MfGysYkflwEz99u0vQaMU",
    authDomain: "wypady-35163.firebaseapp.com",
    projectId: "wypady-35163",
    storageBucket: "wypady-35163.appspot.com",
    messagingSenderId: "996194261421",
    appId: "1:996194261421:web:d23ab09eb2afabbfcbe924"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }