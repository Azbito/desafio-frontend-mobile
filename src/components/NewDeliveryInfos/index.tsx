import { Divider } from 'components/Divider';
import { Text } from 'components/Text';
import { TopBar } from 'components/TopBar';
import { ScrollView, Modal, View, Dimensions } from 'react-native';
import { Colors } from 'utils/colors';
import { styles } from './styles';
import { Button } from 'components/Button';
import { DeliveryDistance } from 'components/DeliveryDistance';
import { DeliveryTrack } from 'components/DeliveryTrack';
import { useDispatch } from 'react-redux';
import { setAccepted, setRejected } from 'features/deliveries-slice';
import { useAppSelector } from 'hooks/useAppSelector';
import { formattedBRL } from 'utils/formattedBRL';
import { useLayoutEffect, useState } from 'react';

interface NewDeliveryInfosProp {
  onPressClose: () => void;
  idNumber: string;
  isOpen: boolean;
}

export function NewDeliveryInfos({ onPressClose, idNumber, isOpen }: NewDeliveryInfosProp) {
  const payment = 13.75;

  const dispatch = useDispatch();

  function acceptDelivery() {
    dispatch(setAccepted());
    onPressClose();
  }

  function rejectDelivery() {
    dispatch(setRejected());
    onPressClose();
  }

  const SCREEN_WIDTH = Dimensions.get('screen').width;

  return (
    <Modal visible={isOpen} transparent animationType="slide">
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.content}>
          <View style={{ width: SCREEN_WIDTH }}>
            <TopBar onPress={onPressClose} name="Nova entrega" />
          </View>
          <View style={styles.deliveryInfosContainer}>
            <View style={styles.deliveryInfosContent}>
              <Text color={Colors.GREY_300} fontFamily="Poppins" fontWeight="REGULAR" fontSize={14}>
                Tempo Estimado
              </Text>
              <Text color={Colors.ORANGE_800} fontFamily="Poppins" fontWeight="BOLD" fontSize={20}>
                30 Min
              </Text>
            </View>
            <View style={styles.deliveryInfosContent}>
              <Text color={Colors.GREY_300} fontFamily="Poppins" fontWeight="REGULAR" fontSize={14}>
                Número de ID
              </Text>
              <Text color={Colors.ORANGE_800} fontFamily="Poppins" fontWeight="BOLD" fontSize={20}>
                #{idNumber}
              </Text>
            </View>
          </View>
          <Divider />
          <View style={styles.valueContainer}>
            <Text color={Colors.GREY_300} fontFamily="Poppins" fontSize={14} fontWeight="REGULAR">
              Valor da Entrega
            </Text>
            <Text
              color={Colors.ORANGE_800}
              fontFamily="Poppins"
              fontWeight="BOLD"
              fontSize={35}
              marginBottom={35}
            >
              {formattedBRL(payment)}
            </Text>
          </View>
          <DeliveryDistance />
          <DeliveryTrack />
          <Button
            isOrange
            iconName="check"
            iconGallery="Feather"
            marginTop={36}
            text="Aceitar"
            width="100%"
            onPress={acceptDelivery}
          />
          <Button
            iconName="x"
            iconGallery="Feather"
            marginTop={15}
            text="Rejeitar"
            width="100%"
            onPress={rejectDelivery}
          />
        </View>
      </ScrollView>
    </Modal>
  );
}
