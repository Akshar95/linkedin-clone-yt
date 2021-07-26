import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfjBerZPsh6x1buRSIdELlkhSEV4ayM9c",
    authDomain: "linkedin-clone-yt-d61e0.firebaseapp.com",
    projectId: "linkedin-clone-yt-d61e0",
    storageBucket: "linkedin-clone-yt-d61e0.appspot.com",
    messagingSenderId: "291002334638",
    appId: "1:291002334638:web:bb3cb493777562d2db5c3f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); //this gets firestore
  const auth = firebase.auth();

  export { db, auth };