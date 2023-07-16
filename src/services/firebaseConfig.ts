// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC1ZSpLOGfv5gGvdFp4bGdfTsKQLTi4QhU',
  authDomain: 'desafio-frontend-mobile-pigz.firebaseapp.com',
  projectId: 'desafio-frontend-mobile-pigz',
  storageBucket: 'desafio-frontend-mobile-pigz.appspot.com',
  messagingSenderId: '841329870611',
  appId: '1:841329870611:web:7479f0a598470a2d9e7ce6',
  measurementId: 'G-HDL05WYQQX',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
