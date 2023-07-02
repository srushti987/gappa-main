
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzK1GMXJhSAsbOcFao_s8cgNPO0o0TE7A",
  authDomain: "gappa-90621.firebaseapp.com",
  projectId: "gappa-90621",
  storageBucket: "gappa-90621.appspot.com",
  messagingSenderId: "117878882201",
  appId: "1:117878882201:web:0dbcddd30ce006d0d71d08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
