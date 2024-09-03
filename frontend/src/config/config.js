import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";

import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA4gkifzquxM0SSjT4oVs1Gxm9EhrbLaSA",
    authDomain: "craftybay-66a74.firebaseapp.com",
    projectId: "craftybay-66a74",
    storageBucket: "craftybay-66a74.appspot.com",
    messagingSenderId: "775026712302",
    appId: "1:775026712302:web:90bff3aafcf0c3b486ddff",
    measurementId: "G-TCH7CKG7ST"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage }