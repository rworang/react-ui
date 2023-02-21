// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAYRJbi1PzI-1nUwubF9vxeOShk87_CEjM",
  authDomain: "video-44804.firebaseapp.com",
  projectId: "video-44804",
  storageBucket: "video-44804.appspot.com",
  messagingSenderId: "211281747580",
  appId: "1:211281747580:web:6323d6ba168df004abf3f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
