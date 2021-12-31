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
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
// };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
