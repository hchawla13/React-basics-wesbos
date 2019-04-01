import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA6x_v97vCvLZz4iB5dWmSIPFFRZAxfcgo",
    authDomain: "catch-of-the-day-harpreet.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-harpreet.firebaseio.com",
    projectId: "catch-of-the-day-harpreet",
    storageBucket: "catch-of-the-day-harpreet.appspot.com",
    messagingSenderId: "1040352062353"
});
const base = Rebase.createClass(firebaseApp.database());

// THis is named export
export {firebaseApp};

// THis is default export 
export default base;
