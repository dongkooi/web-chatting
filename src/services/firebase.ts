// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA5iPjAgzb1cct3-N_XrBLYZW4b0JByNRo',
  authDomain: 'chatting-app-7d880.firebaseapp.com',
  projectId: 'chatting-app-7d880',
  storageBucket: 'chatting-app-7d880.appspot.com',
  messagingSenderId: '861413858030',
  appId: '1:861413858030:web:cb788240d624eaceb231ff',
  measurementId: 'G-6410ZQQS79',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, analytics, auth, db};
