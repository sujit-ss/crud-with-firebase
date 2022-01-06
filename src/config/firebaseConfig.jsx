import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEZ45jV-ypNrJA33rch2ifwD6Kb4coTvQ",
    authDomain: "crud-with-firebase-c4710.firebaseapp.com",
    projectId: "crud-with-firebase-c4710",
    storageBucket: "crud-with-firebase-c4710.appspot.com",
    messagingSenderId: "697994567116",
    appId: "1:697994567116:web:d019e0a8dac369bb87d169",
    measurementId: "G-7ND1T1P3XZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
