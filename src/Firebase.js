import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCa4lnjOvkG6S24KzTOurDWErJKaBQ4cLk",
  authDomain: "simpel-signin.firebaseapp.com",
  projectId: "simpel-signin",
  storageBucket: "simpel-signin.appspot.com",
  messagingSenderId: "291175943277",
  appId: "1:291175943277:web:5b8fec9d67f6aaaf828364"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
