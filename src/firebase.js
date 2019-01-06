
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyC9Nh5lXiHQJQJ5ifcrx7TT6a6R7w-Gjbo",
    authDomain: "reactproject-d69e5.firebaseapp.com",
    databaseURL: "https://reactproject-d69e5.firebaseio.com",
    projectId: "reactproject-d69e5",
    storageBucket: "reactproject-d69e5.appspot.com",
    messagingSenderId: "361491633164"
  };
  firebase.initializeApp(config);

export default firebase;
