import { DaysEarning } from 'components/DaysEarning';
import { DeliveriesSummary } from 'components/DeliveriesSummary';
import { NewDelivery } from 'components/NewDelivery';
import { Text } from 'components/Text';
import { TopBar } from 'components/TopBar';
import { View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { styles } from './styles';

export function Overview() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingHorizontal: 35,
        }}
      >
        <TopBar name="Visão geral" />
        <DaysEarning />
        <DeliveriesSummary />
        <NewDelivery />
      </View>
    </View>
  );
}
