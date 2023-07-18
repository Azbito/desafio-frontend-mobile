import { CardAcceptedAmount } from 'components/CardAcceptedAmount';
import { Text } from 'components/Text';
import { View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { styles } from './styles';
import { useEffect, useState } from 'react';

interface deliveryInfosProps {
  id: number;
  title: string;
  amount: number;
}

interface deliveriesInfosProps {
  accepted: deliveryInfosProps;
  rejected: deliveryInfosProps;
  total: deliveryInfosProps;
}

export function DeliveriesSummary() {
  const [deliveriesInfos, setDeliveriesInfos] = useState<deliveriesInfosProps>({
    accepted: {
      id: 1,
      title: 'Aceitas',
      amount: 15,
    },
    rejected: {
      id: 2,
      title: 'Rejeitadas',
      amount: 5,
    },
    total: {
      id: 3,
      title: 'Total',
      amount: 0,
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Text
          marginBottom={18}
          fontFamily="Poppins"
          color={Colors.GREY_700}
          fontSize={16}
          fontWeight="BOLD"
        >
          Resumo das Entregas
        </Text>
      </View>
      <View style={styles.infosContainer}>
        {Object.entries(deliveriesInfos).map(([key, value]) => (
          <CardAcceptedAmount
            key={value.id}
            title={value.title}
            amount={
              value.title == 'Total'
                ? deliveriesInfos.accepted.amount + deliveriesInfos.rejected.amount ?? 0
                : value.amount
            }
          />
        ))}
      </View>
    </View>
  );
}
