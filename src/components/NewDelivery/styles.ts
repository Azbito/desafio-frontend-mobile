import { StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface NewDeliveryStylesProps {
  container: ViewStyle;
  inputInfoContainer: ViewStyle;
  buttonContainer: ViewStyle;
}

export const styles = StyleSheet.create<NewDeliveryStylesProps>({
  container: {
    marginTop: 32,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.WHITE,
    elevation: 3,
    borderRadius: 16,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  inputInfoContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 12,
  },
  buttonContainer: {
    marginTop: 18,
  },
});
