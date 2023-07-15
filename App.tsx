import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Button } from 'components/Button';
import { Colors } from 'utils/colors';
import { Divider } from 'components/Divider';
import { Text } from 'components/Text';
import { Input } from 'components/Input';
import { SocialMediaButton } from 'components/SocialMediaButton';
import { styles } from './styles';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/logo.png')} />
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
          <SocialMediaButton color={Colors.GREY_100} text="Continuar com o Google" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
