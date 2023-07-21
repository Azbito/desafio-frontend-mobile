import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, TouchableOpacityProps, View, ActivityIndicator } from 'react-native';
import { Text } from 'components/Text';
import { Colors } from 'utils/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  iconName?: string;
  isOrange?: boolean;
  isReject?: boolean;
  borderColor?: string;
  iconGallery?: 'MaterialCommunityIcons' | 'Feather';
  width?: string | number;
  marginTop?: number;
  isLoading?: boolean;
  color?: string;
}

export function Button({
  text,
  iconGallery = 'Feather',
  iconName,
  isOrange = false,
  width,
  marginTop,
  isLoading = false,
  color,
  ...props
}: ButtonProps) {
  const Icon = iconGallery == 'MaterialCommunityIcons' ? MaterialCommunityIcon : FeatherIcon;

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={isLoading ? () => {} : props.onPress} {...props}>
        {isOrange ? (
          <LinearGradient
            colors={[Colors.ORANGE_500, Colors.ORANGE_800]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={[styles.gradient, { gap: iconName ? 8 : 0, width, marginTop }]}
          >
            <>
              {isLoading ? (
                <ActivityIndicator size="large" color={Colors.WHITE} />
              ) : (
                <>
                  {iconName && (
                    <Icon
                      style={{ color: Colors.WHITE, marginBottom: 4 }}
                      size={24}
                      name={iconName}
                    />
                  )}
                  <Text
                    color={Colors.WHITE}
                    fontFamily={'Poppins'}
                    fontWeight="REGULAR"
                    fontSize={16}
                  >
                    {text}
                  </Text>
                </>
              )}
            </>
          </LinearGradient>
        ) : (
          <View style={[styles.notOrangeContent, { marginTop, borderColor: color }]}>
            {isLoading ? (
              <ActivityIndicator size="large" color={color} />
            ) : (
              <>
                {iconName && <Icon style={{ color, marginBottom: 4 }} size={24} name={iconName} />}
                <Text
                  textAlign="center"
                  fontFamily={'Poppins'}
                  fontWeight="MEDIUM"
                  fontSize={16}
                  color={color}
                >
                  {text}
                </Text>
              </>
            )}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
