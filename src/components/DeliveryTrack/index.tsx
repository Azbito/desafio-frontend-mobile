import { Text } from 'components/Text';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import { styles } from './styles';
import { Colors } from 'utils/colors';

export function DeliveryTrack() {
  return (
    <View style={styles.deliveryLocationContainer}>
      <View style={styles.horizontalDivider} />
      <View>
        <View style={styles.deliveryLocation}>
          <LinearGradient
            colors={[Colors.ORANGE_800, Colors.ORANGE_500]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.orangeBall}
          />
          <Text color={Colors.ORANGE_800} fontFamily="Roboto" fontSize={18} fontWeight="MEDIUM">
            Coleta
          </Text>
        </View>
        <View style={styles.deliveryAdress}>
          <View style={styles.countorBall} />
          <View>
            <Text color={Colors.GREY_300} fontFamily="Poppins" fontSize={14} fontWeight="MEDIUM">
              Restaurante Recanto da Peixada
            </Text>
            <Text color={Colors.GREY_300} fontFamily="Poppins" fontSize={14} fontWeight="MEDIUM">
              Distância: 2km
            </Text>
          </View>
        </View>
        <View style={styles.deliveryLocation}>
          <LinearGradient
            colors={[Colors.ORANGE_800, Colors.ORANGE_500]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.orangeBall}
          />
          <Text color={Colors.ORANGE_800} fontFamily="Roboto" fontSize={18} fontWeight="MEDIUM">
            Entrega
          </Text>
        </View>
        <View style={styles.deliveryAdress}>
          <View style={styles.countorBall} />
          <View>
            <Text color={Colors.GREY_300} fontFamily="Poppins" fontSize={14} fontWeight="MEDIUM">
              Av: Cabo dos Soldados - Caranã
            </Text>
            <Text color={Colors.GREY_300} fontFamily="Poppins" fontSize={14} fontWeight="MEDIUM">
              Distância: 6km
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
