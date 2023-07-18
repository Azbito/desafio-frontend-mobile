import { Text } from 'components/Text';
import { View } from 'react-native';
import { Colors } from 'utils/colors';
import { styles } from './styles';
import { ViewProps } from 'react-native';

interface CardAcceptedAmountProps extends ViewProps {
  title: string;
  amount: number;
}

export function CardAcceptedAmount({ title, amount, ...props }: CardAcceptedAmountProps) {
  return (
    <View style={styles.container} {...props}>
      <Text fontFamily="Poppins" fontSize={11} fontWeight="REGULAR" color={Colors.GREY_200}>
        {title}
      </Text>
      <Text fontFamily="Poppins" fontSize={40} fontWeight="MEDIUM" color={Colors.GREY_700}>
        {amount}
      </Text>
    </View>
  );
}
