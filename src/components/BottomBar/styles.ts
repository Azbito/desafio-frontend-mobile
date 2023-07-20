import { Dimensions, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface BottomBarStylesProps {
  container: ViewStyle;
  content: ViewStyle;
  notification: ViewStyle;
}

const SCREEN_WIDTH = Dimensions.get('screen').width;

export const styles: BottomBarStylesProps = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    paddingTop: 11,
    paddingBottom: 25,
    zIndex: 1,
  },
  content: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  notification: {
    width: 16,
    height: 16,
    top: -3,
    right: 45,
    position: 'absolute',
    zIndex: 4,
    borderRadius: 50,
    borderColor: Colors.WHITE,
    borderWidth: 2,
    backgroundColor: Colors.ORANGE_800,
  },
});
