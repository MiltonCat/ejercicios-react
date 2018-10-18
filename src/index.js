import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyARTI9268Uye7R1CgrAseYnn8q6t1AWSU4",
    authDomain: "tienda-frutas-cd382.firebaseapp.com",
    databaseURL: "https://tienda-frutas-cd382.firebaseio.com",
    projectId: "tienda-frutas-cd382",
    storageBucket: "tienda-frutas-cd382.appspot.com",
    messagingSenderId: "1080328638980"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
