// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCrGkD-OD1q5js0Z17N8-ASpTdOH5C91jM',
  authDomain: 'airbnb-house-market.firebaseapp.com',
  projectId: 'airbnb-house-market',
  storageBucket: 'airbnb-house-market.appspot.com',
  messagingSenderId: '220337255025',
  appId: '1:220337255025:web:6385b6ad6fe6240dfee1d0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
