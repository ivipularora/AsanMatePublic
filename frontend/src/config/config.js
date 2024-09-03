import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";

import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "{YOUR_API_KEY_HERE}",
    authDomain: "{}",
    projectId: "{}",
    storageBucket: "{}",
    messagingSenderId: "{}",
    appId: "{}",
    measurementId: "{}"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage }
