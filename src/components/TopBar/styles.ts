import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface TopBarStylesProps {
  container: ViewStyle;
  iconContainer: ViewStyle;
  icon: ViewStyle;
}

export const styles = StyleSheet.create<TopBarStylesProps>({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: { position: 'absolute', left: -135 },
  icon: {
    color: Colors.ORANGE_700,
  },
});
