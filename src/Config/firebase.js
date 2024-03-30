// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmTLECOx-pgzpXMDzUOw4uZej2ZJzwcvk",
    authDomain: "react-82b4f.firebaseapp.com",
    projectId: "react-82b4f",
    storageBucket: "react-82b4f.appspot.com",
    messagingSenderId: "49813632546",
    appId: "1:49813632546:web:26bacbbe0690fa4e03bc7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app); 