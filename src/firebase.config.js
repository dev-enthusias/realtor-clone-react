import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCWVnWOll_j4QC_jxDZB0VwC5sjIVT67uU',
  authDomain: 'realtor-clone-project-9fa0c.firebaseapp.com',
  projectId: 'realtor-clone-project-9fa0c',
  storageBucket: 'realtor-clone-project-9fa0c.appspot.com',
  messagingSenderId: '393546881820',
  appId: '1:393546881820:web:5bd2f094089c6927a1b8d9',
  measurementId: 'G-9HEW2MGMYH',
};

initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();

