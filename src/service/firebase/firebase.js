import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBpgo0GgEN7Ayo9f4ghmzbBt9bIsOSeaHQ',
    authDomain: 'studio-goldney.firebaseapp.com',
    projectId: 'studio-goldney',
    storageBucket: 'studio-goldney.appspot.com',
    messagingSenderId: '1078875871398',
    appId: '1:1078875871398:web:e572ff92ce82d1ee79fc67',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);