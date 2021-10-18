import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfBjMeoRPRXcbGgKvmG_Soj3eqXEwbz4U",
    authDomain: "sim-firegram.firebaseapp.com",
    projectId: "sim-firegram",
    storageBucket: "sim-firegram.appspot.com",
    messagingSenderId: "738870491957",
    appId: "1:738870491957:web:912fb91dba3e87949d6a7c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };