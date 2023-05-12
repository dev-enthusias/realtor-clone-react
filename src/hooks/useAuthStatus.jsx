import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingState, setCheckingState] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckingState(false);
    });
  }, []);
  return { loggedIn, checkingState };
}
