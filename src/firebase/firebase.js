// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6CuxB2WLV_rpKSBTPdBzVq7KIqugUvXw",
    authDomain: "fegame-73e9a.firebaseapp.com",
    projectId: "fegame-73e9a",
    storageBucket: "fegame-73e9a.appspot.com",
    messagingSenderId: "1088793253906",
    appId: "1:1088793253906:web:5924d42b15709317f520cb",
    measurementId: "G-4WQ0BP0JG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export default firebaseConfig

