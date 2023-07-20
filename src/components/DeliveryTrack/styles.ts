import { StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface DeliveryTrackStylesProps {
  horizontalDivider: ViewStyle;
  orangeBall: ViewStyle;
  deliveryLocation: ViewStyle;
  deliveryLocationContainer: ViewStyle;
  deliveryAdress: ViewStyle;
  countorBall: ViewStyle;
}

export const styles = StyleSheet.create<DeliveryTrackStylesProps>({
  deliveryLocationContainer: {
    position: 'relative',
    width: '100%',
  },
  horizontalDivider: {
    width: 1,
    height: 192,
    position: 'absolute',
    left: 25,
    backgroundColor: Colors.GREY_300,
  },
  orangeBall: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: 'red',
    marginLeft: 18.5,
    marginRight: 9,
  },
  deliveryLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 39,
  },
  deliveryAdress: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  countorBall: {
    marginRight: 9,
    marginLeft: 21,
    marginBottom: 27,
    width: 9,
    height: 9,
    borderRadius: 50,
    borderColor: Colors.ORANGE_700,
    borderWidth: 1,
    backgroundColor: Colors.WHITE,
  },
});
