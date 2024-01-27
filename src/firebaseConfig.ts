// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAhzgmOri5iGrPQKtaZqC6ts310qHaOFj0',
  authDomain: 'pinwheel-128.firebaseapp.com',
  projectId: 'pinwheel-128',
  storageBucket: 'pinwheel-128.appspot.com',
  messagingSenderId: '788781407024',
  appId: '1:788781407024:web:f3e7ca511c336d7f9586f5',
  measurementId: 'G-7Y1ZNQVEVY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
