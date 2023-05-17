import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter } from 'react-router-dom';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWDg664zHoel37XM3_nnPfi19svXdC3lE",
  authDomain: "react-chat-application-aba88.firebaseapp.com",
  databaseURL: "https://react-chat-application-aba88-default-rtdb.firebaseio.com",
  projectId: "react-chat-application-aba88",
  storageBucket: "react-chat-application-aba88.appspot.com",
  messagingSenderId: "691249122151",
  appId: "1:691249122151:web:9c77a7715e8380a8de3dc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>
);
