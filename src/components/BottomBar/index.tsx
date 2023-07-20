import { Text } from 'components/Text';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from 'utils/colors';
import { styles } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paths } from 'utils/paths';

interface NavigationsProps {
  id: number;
  title: string;
  icon: string;
  isActive: boolean;
  path?: string;
  hasNotification?: boolean;
}

export function BottomBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navigations: NavigationsProps[] = [
    {
      id: 1,
      title: 'Relatórios',
      icon: 'file-text',
      isActive: false,
      hasNotification: true,
    },
    {
      id: 2,
      title: 'Visão geral',
      icon: 'home',
      isActive: location.pathname == Paths.HOME,
      path: Paths.HOME,
    },
    {
      id: 3,
      title: 'Perfil',
      icon: 'user',
      isActive: false,
    },
  ];

  return (
    <View style={styles.container}>
      {navigations.map((item) => (
        <TouchableOpacity
          onPress={item.path ? () => navigate(item.path ?? '') : () => {}}
          style={styles.content}
        >
          {item.hasNotification && <View style={styles.notification} />}
          <Icon
            color={item.isActive ? Colors.ORANGE_800 : Colors.GREY_200}
            size={28}
            name={item.icon}
          />
          <Text
            marginTop={4}
            color={item.isActive ? Colors.ORANGE_800 : Colors.GREY_200}
            fontFamily="Poppins"
            fontWeight="REGULAR"
            fontSize={15}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
