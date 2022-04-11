// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMOc-U9HJMq1XK1YfD_JQV_sWZ1aWfdHg",
  authDomain: "ema-john-simple-a4fee.firebaseapp.com",
  projectId: "ema-john-simple-a4fee",
  storageBucket: "ema-john-simple-a4fee.appspot.com",
  messagingSenderId: "378165045246",
  appId: "1:378165045246:web:5ae44b7c93e5ad301fc2af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
