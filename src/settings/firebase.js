import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDVLpxUGNxXWdYeVTQqEsWp_nqgcKuHC0M",
  authDomain: "zorroconbotas-549b8.firebaseapp.com",
  projectId: "zorroconbotas-549b8",
  storageBucket: "zorroconbotas-549b8.appspot.com",
  messagingSenderId: "903369223840",
  appId: "1:903369223840:web:f06fd1b3d1c548ee5963c5"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

//export const db = getFirestore(app);

export const auth = getAuth(app);

 export const db = getFirestore(app);

export const menuRef = collection(db, 'MenuZorro')


