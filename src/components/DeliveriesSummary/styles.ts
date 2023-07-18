import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface DeliveriesSummaryStylesProps {
  container: ViewStyle;
  infosContainer: ViewStyle;
}

export const styles = StyleSheet.create<DeliveriesSummaryStylesProps>({
  container: {
    elevation: 3,
    marginTop: 32,
    paddingTop: 12,
    paddingBottom: 32,
    paddingHorizontal: 13,
    width: '100%',
    backgroundColor: Colors.WHITE,
    borderRadius: 16,
  },
  infosContainer: {
    flexDirection: 'row',
    width: '33%',
    gap: 6,
  },
});
