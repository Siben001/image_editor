import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCixfQ2ZUPDXdzeHEwbhVsP5qOk8iTA7bg",
    authDomain: "imageeditor-ac09e.firebaseapp.com",
    databaseURL: "https://imageeditor-ac09e.firebaseio.com",
    projectId: "imageeditor-ac09e",
    storageBucket: "imageeditor-ac09e.appspot.com",
    messagingSenderId: "202752896344",
    appId: "1:202752896344:web:efc9f56209414a31bb092d"
};

firebase.initializeApp(config);
const storage = firebase.storage();
const storageRef = storage.ref();

export default storageRef;