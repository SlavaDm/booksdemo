import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.scss';
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
	apiKey: "AIzaSyCtYPC7_HR7MbH3BvN5rPgfQC3Pjv8M1u4",
	authDomain: "book-collection-be281.firebaseapp.com",
	projectId: "book-collection-be281",
	storageBucket: "book-collection-be281.appspot.com",
	messagingSenderId: "47570738890",
	appId: "1:47570738890:web:c3ec515fbb05584d5d9e33"
});

export const Context = createContext(null)

const auth = firebase.auth()

const firestore = firebase.firestore()

ReactDOM.render(
	<Context.Provider value={{
		firebase,
		auth,
		firestore
	}}>
		<App />
	</Context.Provider>,
	document.getElementById('root')
);
