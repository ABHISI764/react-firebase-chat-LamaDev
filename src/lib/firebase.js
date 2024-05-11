// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-2c193.firebaseapp.com",
  projectId: "reactchat-2c193",
  storageBucket: "reactchat-2c193.appspot.com",
  messagingSenderId: "265280204922",
  appId: "1:265280204922:web:a64e2bd5429a4bcc478bc3"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore()
export const storage = getStorage()