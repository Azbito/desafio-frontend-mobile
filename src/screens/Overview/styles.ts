import { Dimensions, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface OverviewStyleProps {
  container: ViewStyle;
}

const SCREEN_WIDTH = Dimensions.get('screen').width;

export const styles: OverviewStyleProps = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    marginTop: 32,
    paddingBottom: 118,
  },
});
