// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGknjNcW1dPZwkFr2PI0zkHvBG4NiJGBs",
  authDomain: "desarrolloreact-f98ac.firebaseapp.com",
  projectId: "desarrolloreact-f98ac",
  storageBucket: "desarrolloreact-f98ac.appspot.com",
  messagingSenderId: "646759629809",
  appId: "1:646759629809:web:eb03da6858a3fef7463a50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
