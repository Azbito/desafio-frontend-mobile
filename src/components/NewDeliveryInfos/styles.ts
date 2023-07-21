import { StyleSheet, Dimensions, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface NewDeliveryInfosStylesProps {
  content: ViewStyle;
  deliveryInfosContainer: ViewStyle;
  deliveryInfosContent: ViewStyle;
  valueContainer: ViewStyle;
  gradient: ViewStyle;
  iconContainer: ViewStyle;
  icon: ViewStyle;
  horizontalDivider: ViewStyle;
  orangeBall: ViewStyle;
  deliveryLocation: ViewStyle;
  deliveryLocationContainer: ViewStyle;
  deliveryAdress: ViewStyle;
  countorBall: ViewStyle;
}

const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const styles = StyleSheet.create<NewDeliveryInfosStylesProps>({
  content: {
    height: SCREEN_HEIGHT,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: Colors.WHITE,
  },
  deliveryInfosContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 55,
    marginTop: 44,
  },
  deliveryInfosContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 16,
    width: '100%',
  },
  iconContainer: {
    padding: 14,
  },
  icon: {
    color: Colors.WHITE,
  },
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
