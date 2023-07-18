import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface DaysEarningStylesProps {
  container: ViewStyle;
  earningContainer: ViewStyle;
  gradientContainer: ViewStyle;
  dateContainer: ViewStyle;
  eye: ViewStyle;
  eyeOff: ViewStyle;
  hiddenValueContainer: ViewStyle;
}

export const styles = StyleSheet.create<DaysEarningStylesProps>({
  container: {
    width: '100%',
    marginTop: 59,
  },
  earningContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  dateContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 10,
  },
  gradientContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 107,
    borderRadius: 16,
    padding: 16,
  },
  hiddenValueContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  eye: {
    color: Colors.WHITE,
  },
  eyeOff: {
    color: Colors.WHITE,
  },
});
