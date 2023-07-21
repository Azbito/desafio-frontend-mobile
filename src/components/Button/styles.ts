import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface ButtonStylesProps {
  buttonContainer: ViewStyle;
  gradient: ViewStyle;
  notOrangeContent: ViewStyle;
}

export const styles = StyleSheet.create<ButtonStylesProps>({
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  gradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 16,
  },
  notOrangeContent: {
    borderWidth: 1,
    borderRadius: 16,
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
});
