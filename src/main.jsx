import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC397eNZ5aTJKcZ8Fm1NK6Mi3o1u-ad8vU",
  authDomain: "e-commers-2787d.firebaseapp.com",
  projectId: "e-commers-2787d",
  storageBucket: "e-commers-2787d.appspot.com",
  messagingSenderId: "796053965463",
  appId: "1:796053965463:web:dd834173c9e234dbaf77d2",
  measurementId: "G-WX04BN2XZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
