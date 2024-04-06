
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDUX6i6aIzbiv54ndUgV4-LZdi3D4dS6SA",
  authDomain: "insta-clone-f175c.firebaseapp.com",
  projectId: "insta-clone-f175c",
  storageBucket: "insta-clone-f175c.appspot.com",
  messagingSenderId: "830580589079",
  appId: "1:830580589079:web:a03a168901313c7eb69252",
  measurementId: "G-SWM6WK1Y2Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)
const storage = getStorage(app)
export {app, auth, firestore, storage}