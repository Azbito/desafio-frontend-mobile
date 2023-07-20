import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface TopBarStylesProps {
  container: ViewStyle;
  iconContainer: ViewStyle;
  icon: ViewStyle;
  textContainer: ViewStyle;
}

export const styles = StyleSheet.create<TopBarStylesProps>({
  container: {
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
  },
  iconContainer: {
    left: 16,
    position: 'absolute',
    zIndex: 5,
  },
  icon: {
    color: Colors.ORANGE_800,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
