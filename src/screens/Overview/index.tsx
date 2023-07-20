import { DaysEarning } from 'components/DaysEarning';
import { DeliveriesSummary } from 'components/DeliveriesSummary';
import { NewDelivery } from 'components/NewDelivery';
import { TopBar } from 'components/TopBar';
import { Keyboard, NativeSyntheticEvent, TextInputChangeEventData, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { NewDeliveryInfos } from 'components/NewDeliveryInfos';
import { StatusBar } from 'expo-status-bar';
import { onlyNumbers } from 'utils/onlyNumbers';

export function Overview() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [idNumberInfo, setIdNumberInfo] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const text = e.nativeEvent.text;
    setIdNumberInfo(onlyNumbers(text));
    setError('');
  };

  function startNewDelivery() {
    if (idNumberInfo === '') {
      setError('Preencha o campo.');
      return;
    }
    Keyboard.dismiss();
    setIsOpenModal(true);
  }

  return (
    <View style={styles.container}>
      <TopBar name="Visão geral" />
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingHorizontal: 35,
        }}
      >
        <DaysEarning />
        <DeliveriesSummary />
        <NewDelivery
          value={idNumberInfo}
          onChangeText={handleInputChange}
          onPress={startNewDelivery}
          error={error}
        />
      </View>

      <NewDeliveryInfos
        isOpen={isOpenModal}
        idNumber={String(idNumberInfo)}
        onPressClose={() => setIsOpenModal(false)}
      />

      <StatusBar style="auto" />
    </View>
  );
}
