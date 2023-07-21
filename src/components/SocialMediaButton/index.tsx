import { Image, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Text } from 'components/Text';
import googleLogo from '../../../assets/images/google-logo.png';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  color: string;
  isGoogle?: boolean;
}

export function SocialMediaButton({ isGoogle, text, color, ...props }: ButtonProps) {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          <Image source={googleLogo} />
        </View>
        <Text fontFamily={'Poppins'} fontWeight="MEDIUM" fontSize={16} marginTop={4} color={color}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
