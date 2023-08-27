
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Jws9QtxilDNpqwNgu-RDOvgwA9IMUdE",
  authDomain: "fir-course-7ba46.firebaseapp.com",
  projectId: "fir-course-7ba46",
  storageBucket: "fir-course-7ba46.appspot.com",
  messagingSenderId: "580674191311",
  appId: "1:580674191311:web:2486516e90953fc9225cba",
  measurementId: "G-C47CDZRNEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
//we are providing acess to firestore by this db
export const db = getFirestore(app);