import firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCl5Ql6VBrf66lgQoqGpsy5bCmLLqSeVyo",
    authDomain: "montabib-941e8.firebaseapp.com",
    projectId: "montabib-941e8",
    storageBucket: "montabib-941e8.appspot.com",
    messagingSenderId: "245941096412",
    appId: "1:245941096412:web:d9b687e584cd9e8d0d4919",
    measurementId: "G-LRPR8WJJNT"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();


export default firebase;
