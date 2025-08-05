
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpQxpMmOyGO5tqmp5mh2RP2LFJg-yOZzs",
    authDomain: "notenest-40edc.firebaseapp.com",
    projectId: "notenest-40edc",
    storageBucket: "notenest-40edc.firebasestorage.app",
    messagingSenderId: "1001574467474",
    appId: "1:1001574467474:web:f8e1db1bef5487f3c8e34b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };