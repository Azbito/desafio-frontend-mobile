import { CardAcceptedAmount } from 'components/CardAcceptedAmount';
import { Text } from 'components/Text';
import { View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'hooks/useAppSelector';

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
  const deliveries = useAppSelector((state) => state.deliveries);

  const deliveriesInfos: deliveriesInfosProps = {
    accepted: {
      id: 1,
      title: 'Aceitas',
      amount: deliveries.accepted,
    },
    rejected: {
      id: 2,
      title: 'Rejeitadas',
      amount: deliveries.rejected,
    },
    total: {
      id: 3,
      title: 'Total',
      amount: deliveries.accepted + deliveries.rejected,
    },
  };

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
          Resumo das Entregasadsasd
        </Text>
      </View>
      <View style={styles.infosContainer}>
        {Object.entries(deliveriesInfos).map(([key, value]) => (
          <CardAcceptedAmount key={value.id} title={value.title} amount={value.amount} />
        ))}
      </View>
    </View>
  );
}
