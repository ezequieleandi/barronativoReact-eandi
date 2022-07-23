
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcJMkX-qD1U1pf8pjvI5lBfj4wcn1Lpg8",
  authDomain: "prueba-react-general.firebaseapp.com",
  projectId: "prueba-react-general",
  storageBucket: "prueba-react-general.appspot.com",
  messagingSenderId: "991731415087",
  appId: "1:991731415087:web:aee41df221081217feaeda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function iniFirestore(){
    return app;
}