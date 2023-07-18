import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Text } from 'components/Text';
import { View } from 'react-native';
import { Colors } from 'utils/colors';
import { styles } from './styles';

export function NewDelivery() {
  return (
    <View style={styles.container}>
      <Text fontFamily="Poppins" color={Colors.GREY_700} fontSize={16} fontWeight="BOLD">
        Iniciar Nova Entrega
      </Text>
      <Text
        marginTop={8}
        marginBottom={10}
        fontFamily="Poppins"
        color={Colors.GREY_300}
        fontSize={16}
        fontWeight="REGULAR"
      >
        Número de identificação
      </Text>
      <View style={styles.inputInfoContainer}>
        <Input width="76%" />
        <Button width="20%" text="OK" isOrange />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          width="100%"
          text="Escanear Qrcode"
          iconGallery="MaterialCommunityIcons"
          iconName="qrcode-scan"
          isOrange
        />
      </View>
    </View>
  );
}
