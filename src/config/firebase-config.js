// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDWy_HcUzLGSuSn659mXC1jru5-HC6_FgM",
//   authDomain: "react-firebase-e5a7f.firebaseapp.com",
//   projectId: "react-firebase-e5a7f",
//   storageBucket: "react-firebase-e5a7f.appspot.com",
//   messagingSenderId: "77938407995",
//   appId: "1:77938407995:web:d8a794509f6ca652967a1e",
//   measurementId: "G-DXNH1HY51R"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

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