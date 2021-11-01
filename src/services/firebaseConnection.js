import firebase from "firebase/app"
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCVQkKpaRwDSh6GgWvOkWYkybV4vhq9JN0",
  authDomain: "sistema-5b1fc.firebaseapp.com",
  projectId: "sistema-5b1fc",
  storageBucket: "sistema-5b1fc.appspot.com",
  messagingSenderId: "1072199991260",
  appId: "1:1072199991260:web:fda731d0d0ccbe03cc5919",
  measurementId: "G-3BZBRTJ00D"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


export default firebase