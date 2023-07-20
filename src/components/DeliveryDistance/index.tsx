import { Text } from 'components/Text';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import { Colors } from 'utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

export function DeliveryDistance() {
  return (
    <LinearGradient
      colors={[Colors.ORANGE_500, Colors.ORANGE_800]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} name="moped-outline" size={24} />
      </View>
      <View>
        <Text color={Colors.WHITE} fontFamily="Roboto" fontSize={18} fontWeight="MEDIUM">
          Entrega
        </Text>
        <Text color={Colors.WHITE} fontFamily="Roboto" fontSize={12} fontWeight="MEDIUM">
          Percurso Total: 8km
        </Text>
      </View>
    </LinearGradient>
  );
}
