import { StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface DeliveryDistanceStylesProps {
  gradient: ViewStyle;
  iconContainer: ViewStyle;
  icon: ViewStyle;
}

export const styles = StyleSheet.create<DeliveryDistanceStylesProps>({
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
});
