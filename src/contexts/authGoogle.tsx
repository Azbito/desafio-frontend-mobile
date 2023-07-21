import { createContext, useEffect, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

interface UserProps {
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: object;
  multiFactor: object;
  phoneNumber: string | number | null;
  photoURL: string;
  providerData: [] | object;
  providerId: string;
  tenantId: string | number | null;
  uid: string | null;
}

export const AuthGoogleContext = createContext<{
  isSigned: boolean;
  setIsSigned: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<UserProps | null>>;
  onGoogleButtonPress: () => void;
}>({
  isSigned: false,
  onGoogleButtonPress: () => {},
  setUser: () => {},
  setIsSigned: () => {},
});

export function AuthGoogleProvider({ children }: any) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<UserProps | null>({
    displayName: '',
    email: '',
    emailVerified: false,
    isAnonymous: false,
    metadata: {},
    multiFactor: {},
    phoneNumber: null,
    photoURL: '',
    providerData: {},
    providerId: '',
    tenantId: null,
    uid: null,
  });
  const [isSigned, setIsSigned] = useState<boolean>(false);

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    try {
      await auth().signInWithCredential(googleCredential);
    } catch (error) {}
  }

  if (initializing) return null;

  return (
    <AuthGoogleContext.Provider
      value={{
        isSigned: user?.uid != null ? true : isSigned,
        setIsSigned,
        onGoogleButtonPress,
        setUser,
      }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
}
