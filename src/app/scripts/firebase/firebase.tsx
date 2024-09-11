
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_Emp8awHXIOPiGsqxzulXWi9np_YRMX4",
    authDomain: "virtualhome-59d90.firebaseapp.com",
    projectId: "virtualhome-59d90",
    storageBucket: "virtualhome-59d90.appspot.com",
    messagingSenderId: "520899587965",
    appId: "1:520899587965:web:9a22d89da9af3accbb2614",
    measurementId: "G-B2JSR6B2RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { app, auth, firestore }