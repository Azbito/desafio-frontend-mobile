import { Button } from 'components/Button';
import { Colors } from 'utils/colors';
import { Divider } from 'components/Divider';
import { Text } from 'components/Text';
import { Input } from 'components/Input';
import { SocialMediaButton } from 'components/SocialMediaButton';
import { StatusBar } from 'expo-status-bar';
import { Image, View } from 'react-native';
import { styles } from './styles';
import { useContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export function Login() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
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

    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (initializing) return null;

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/logo.png')} />
      <Text fontFamily="Poppins" fontWeight="SEMIBOLD" fontSize={18} color={Colors.GREY_600}>
        Para entregadores
      </Text>
      <View style={styles.loginContainer}>
        <Text
          fontFamily="Poppins"
          fontWeight="SEMIBOLD"
          fontSize={16}
          color={Colors.GREY_500}
          marginTop={32}
        >
          Login
        </Text>
        <Input label="Email ou Telefone" />
        <Input isConfidential />
        <Text
          fontFamily="Poppins"
          fontWeight="REGULAR"
          color={Colors.GREY_300}
          fontSize={13}
          marginVertical={20}
          textDecorationLine="underline"
        >
          Esqueci minha senha
        </Text>
      </View>
      <Button text="Entrar" isOrange />
      <View style={styles.signUpContainer}>
        <Text fontFamily="Poppins" fontWeight="REGULAR" color={Colors.GREY_300} fontSize={13}>
          Não tem uma Conta?
        </Text>
        <Text fontFamily="Poppins" fontWeight="REGULAR" color={Colors.ORANGE_700} fontSize={13}>
          Criar agora!
        </Text>
      </View>
      <View style={styles.loginWithContainer}>
        <View style={styles.loginWithContent}>
          <Text
            fontFamily="Poppins"
            fontWeight="SEMIBOLD"
            fontSize={13}
            color={Colors.GREY_600}
            paddingRight={7}
          >
            Entrar com
          </Text>
          <Divider />
        </View>
        <View style={styles.googleContainer}>
          <SocialMediaButton
            onPress={() => onGoogleButtonPress()}
            color={Colors.GREY_100}
            text="Continuar com o Google"
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
