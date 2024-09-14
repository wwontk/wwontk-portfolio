// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA055p-hgR06EOOcBYrum1QsunnOAMtGBM",
  authDomain: "wwont-portfolio.firebaseapp.com",
  projectId: "wwont-portfolio",
  storageBucket: "wwont-portfolio.appspot.com",
  messagingSenderId: "35386798377",
  appId: "1:35386798377:web:9445a8c15e6b596fd0c738",
  measurementId: "G-QQG0L3X4WE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { analytics, storage, db };
