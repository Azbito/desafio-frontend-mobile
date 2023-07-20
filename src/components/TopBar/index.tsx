import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';
import { Text } from 'components/Text';
import { Colors } from 'utils/colors';
import { Modal } from 'react-native';

interface TopBarProps extends TouchableOpacityProps {
  name: string;
  onPress?: () => void;
}

export function TopBar({ name, onPress }: TopBarProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
        <Icon style={styles.icon} name="arrow-left" size={24} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text color={Colors.GREY_600} fontFamily="Poppins" fontWeight="MEDIUM" fontSize={18}>
          {name}
        </Text>
      </View>
    </View>
  );
}
