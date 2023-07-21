import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AuthGoogleProvider } from 'contexts/authGoogle';
import { useFonts } from 'expo-font';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { Provider } from 'react-redux';
import { Routes } from 'routes';
import { store } from 'store';
import { WEB_CLIENT_ID } from '@env';
import 'expo-dev-client';

export default function App() {
  GoogleSignin.configure({
    webClientId: '874917802643-vjsocavrjbbuupg93iugolos9aqh14ug.apps.googleusercontent.com',
  });

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
