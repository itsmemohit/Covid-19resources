import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAm1Bb0I_3mZPOpYHRAaQ9T_OldcJgks0k",
  authDomain: "covid19-resources.firebaseapp.com",
  projectId: "covid19-resources",
  storageBucket: "covid19-resources.appspot.com",
  messagingSenderId: "863892687688",
  appId: "1:863892687688:web:12a2d626eca5972e13417d",
  measurementId: "G-121EBY7E67"
};

firebase.initializeApp(firebaseConfig);

firebase.analytics();

export default firebase;