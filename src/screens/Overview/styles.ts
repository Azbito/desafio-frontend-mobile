import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from 'utils/colors';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
  },
});
