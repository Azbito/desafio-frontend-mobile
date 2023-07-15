import { Image, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Text } from 'components/Text';
import googleLogo from '../../../assets/images/google-logo.png';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  color: string;
  isGoogle?: boolean;
}

export function SocialMediaButton({ isGoogle, text, color, ...props }: ButtonProps) {
  return (
    <TouchableOpacity {...props}>
      <View
        style={{
          borderWidth: 1,
          borderColor: color,
          borderRadius: 16,
          width: '100%',
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          position: 'relative',
          gap: 8,
        }}
      >
        <Image
          source={googleLogo}
          style={{ width: 20, height: 20, position: 'absolute', left: 16 }}
        />
        <Text fontFamily={'Poppins'} fontWeight="MEDIUM" fontSize={16} marginTop={4} color={color}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
