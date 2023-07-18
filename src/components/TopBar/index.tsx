import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';
import { Text } from 'components/Text';
import { Colors } from 'utils/colors';

interface TopBarProps extends TouchableOpacityProps {
  name: string;
}

export function TopBar({ name }: TopBarProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon style={styles.icon} name="arrow-left" size={24} />
      </TouchableOpacity>
      <View>
        <Text color={Colors.GREY_600} fontFamily="Poppins" fontWeight="MEDIUM" fontSize={18}>
          {name}
        </Text>
      </View>
    </View>
  );
}
