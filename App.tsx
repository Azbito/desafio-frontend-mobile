import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NewDeliveryInfos } from 'components/NewDeliveryInfos';
import { AuthGoogleContext, AuthGoogleProvider } from 'contexts/authGoogle';
import { useFonts } from 'expo-font';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { useContext } from 'react';
import { Provider } from 'react-redux';
import { Routes } from 'routes';
import { Login } from 'screens/Login';
import { Overview } from 'screens/Overview';
import { store } from 'store';

export default function App() {
  GoogleSignin.configure({
    webClientId: '667595391344-lf00smgg3hvkt7kproclp671qb557uof.apps.googleusercontent.com',
  });
  const { isSigned } = useContext(AuthGoogleContext);
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <Provider store={store}>
      <ExpoStatusBar style="dark" />
      <AuthGoogleProvider>
        <Routes />
      </AuthGoogleProvider>
    </Provider>
  );
}
