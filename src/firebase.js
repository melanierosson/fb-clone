import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDe9iifNDVqckVcn36bmkJrPo06uZsrOY4",
    authDomain: "fb-clone-591ff.firebaseapp.com",
    projectId: "fb-clone-591ff",
    storageBucket: "fb-clone-591ff.appspot.com",
    messagingSenderId: "285052560160",
    appId: "1:285052560160:web:36b5d4efa52b6f4fa12d45"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;