import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Text } from 'components/Text';
import { Colors } from 'utils/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { buttonStylesColor } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  iconName?: string;
  isOrange?: boolean;
  isReject?: boolean;
  borderColor?: string;
  iconGallery?: 'MaterialCommunityIcons' | 'Feather';
}

export function Button({ text, iconGallery = 'Feather', iconName, isOrange = false }: ButtonProps) {
  const Icon = iconGallery == 'MaterialCommunityIcons' ? MaterialCommunityIcon : FeatherIcon;
  const styles = buttonStylesColor(isOrange);

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity>
        {isOrange ? (
          <LinearGradient
            colors={[Colors.ORANGE_700, Colors.ORANGE_500]}
            start={{ x: 2, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradient}
          >
            {iconName && (
              <Icon style={{ color: Colors.WHITE, marginBottom: 4 }} size={24} name={iconName} />
            )}
            <Text fontFamily={'Poppins'} fontWeight="REGULAR" fontSize={16} color={Colors.WHITE}>
              {text}
            </Text>
          </LinearGradient>
        ) : (
          <View style={styles.notOrangeContent}>
            {iconName && (
              <Icon style={{ color: Colors.RED_500, marginBottom: 4 }} size={24} name={iconName} />
            )}
            <Text fontFamily={'Poppins'} fontWeight="MEDIUM" fontSize={16} color={Colors.RED_500}>
              {text}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
