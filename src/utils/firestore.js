import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCFNt82ILpuzsejXoBANWScT61DQVg-89w',
	authDomain: 'hotel-menu-37c45.firebaseapp.com',
	projectId: 'hotel-menu-37c45',
	storageBucket: 'hotel-menu-37c45.appspot.com',
	messagingSenderId: '347882697716',
	appId: '1:347882697716:web:20b9311fa7c5c1b52e7fa1',
	measurementId: 'G-XY7HV763GW',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
