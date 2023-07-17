import { createContext, useEffect, useState } from 'react';
import React from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

type userProps = [] | null | undefined | boolean;

export const AuthGoogleContext = createContext<{
  isSigned: userProps;
  onGoogleButtonPress: () => void;
}>({
  isSigned: null,
  onGoogleButtonPress: () => {},
});

export function AuthGoogleProvider({ children }: any) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<userProps>(null);

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    try {
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  }

  if (initializing) return null;

  return (
    <AuthGoogleContext.Provider
      value={{
        isSigned: !!user,
        onGoogleButtonPress,
      }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
}
