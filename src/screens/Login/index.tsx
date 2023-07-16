import { Button } from 'components/Button';
import { Colors } from 'utils/colors';
import { Divider } from 'components/Divider';
import { Text } from 'components/Text';
import { Input, borderProp } from 'components/Input';
import { SocialMediaButton } from 'components/SocialMediaButton';
import { StatusBar } from 'expo-status-bar';
import { Image, View, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { styles } from './styles';
import { useContext, useState } from 'react';
import { AuthGoogleContext } from 'contexts/authGoogle';

export function Login() {
  const { onGoogleButtonPress } = useContext(AuthGoogleContext);
  const [emailInputBorderColor, setEmailInputBorderColor] = useState<borderProp>(null);
  const [passwordInputBorderColor, setPasswordInputBorderColor] = useState<borderProp>(null);

  const handleEmailInputChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const text = e.nativeEvent.text;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);

    if (isValidEmail) {
      setEmailInputBorderColor('RIGHT');
      return;
    }

    if (text.trim() === '') {
      setEmailInputBorderColor(null);
      return;
    }

    setEmailInputBorderColor('WRONG');
  };

  const handlePasswordInputChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const text = e.nativeEvent.text;

    if (text) {
      setPasswordInputBorderColor('RIGHT');
      return;
    }

    setPasswordInputBorderColor(null);
  };

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
        <Input
          border={emailInputBorderColor}
          onChange={handleEmailInputChange}
          label="Email ou Telefone"
        />
        <Input
          border={passwordInputBorderColor}
          onChange={handlePasswordInputChange}
          isConfidential
        />
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
