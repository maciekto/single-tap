import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCYYsq4j3KCw6JdaOnf0rM9Yep6vN8N-zU",
    authDomain: "single-tap.firebaseapp.com",
    databaseURL: 'https://single-tap-default-rtdb.europe-west1.firebasedatabase.app/',
    projectId: "single-tap",
    storageBucket: "single-tap.appspot.com",
    messagingSenderId: "526553711721",
    appId: "1:526553711721:web:b61981ac6fb1378c844ef8",
    measurementId: "G-FC8JXNXTNM"
};
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;

