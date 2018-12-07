import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD5RfXlJxkLteAo22_-h90LKYieCdWYXlQ",
    authDomain: "lyric-finder-f1109.firebaseapp.com",
    databaseURL: "https://lyric-finder-f1109.firebaseio.com",
    projectId: "lyric-finder-f1109",
    storageBucket: "",
    messagingSenderId: "180137908417"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;