import { StyleSheet, View, ViewStyle, useColorScheme } from 'react-native';
import { Colors } from 'utils/colors';

interface TopBarStylesProps {
  container: ViewStyle;
  iconContainer: ViewStyle;
  icon: ViewStyle;
  textContainer: ViewStyle;
}

export const styles = StyleSheet.create<TopBarStylesProps>({
  container: {
    marginTop: 50,
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute',
    zIndex: 5,
    left: 16,
  },
  icon: {
    color: Colors.ORANGE_800,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
