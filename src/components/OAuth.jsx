import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useNavigate } from 'react-router';

export default function OAuth() {
  const navigate = useNavigate();

  async function onAuthClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate('/');
    } catch (error) {
      toast.error('Authorization by google failed', {
        toastId: 'error',
      });
    }
  }

  return (
    <button
      type='button'
      className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium rounded active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'
      onClick={onAuthClick}
    >
      <FcGoogle className='text-2xl bg-white rounded-full mr-2' /> Continue with
      Google
    </button>
  );
}
