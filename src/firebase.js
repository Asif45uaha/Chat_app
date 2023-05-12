import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyA5938MC-3luNyjLinGqzSzONQRcp9f0Ks",
    authDomain: "chat-7e882.firebaseapp.com",
    projectId: "chat-7e882",
    storageBucket: "chat-7e882.appspot.com",
    messagingSenderId: "370978086601",
    appId: "1:370978086601:web:40870386ab327b0b2a7718"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)