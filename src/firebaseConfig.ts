import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  orderBy,
  limit,
  onSnapshot,
  query,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDRx4bTPGJovtO9STiUtMiiI8AAczrMhoE',
  authDomain: 'resturant-app-589e9.firebaseapp.com',
  projectId: 'resturant-app-589e9',
  storageBucket: 'resturant-app-589e9.appspot.com',
  messagingSenderId: '1058312537151',
  appId: '1:1058312537151:web:cb84984f8ba08d608e248a',
  measurementId: 'G-GRZCN104DM',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {
  db,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  auth,
  orderBy,
  limit,
  onSnapshot,
  query,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
