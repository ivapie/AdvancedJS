import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCa2aScYx1IyM4dkkL1bcu7VHYzuMujqJw",
  authDomain: "edwar6-1e23d.firebaseapp.com",
  databaseURL: "https://edwar6-1e23d.firebaseio.com",
  projectId: "edwar6-1e23d",
  storageBucket: "edwar6-1e23d.appspot.com",
  messagingSenderId: "1069511337291"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
