// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCg-hoB2FbvVBhLQwlEJa6tJMQ1d3_l0Y",
  authDomain: "wedding-planning-auth.firebaseapp.com",
  projectId: "wedding-planning-auth",
  storageBucket: "wedding-planning-auth.appspot.com",
  messagingSenderId: "954187562984",
  appId: "1:954187562984:web:6d1601d398acd3e97dee5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
