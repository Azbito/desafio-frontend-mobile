import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface SocialMediaButtonStylesProps {
  buttonContainer: ViewStyle;
  iconContainer: ViewStyle;
}

export const styles = StyleSheet.create<SocialMediaButtonStylesProps>({
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 16,
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
    color: Colors.GREY_400,
    borderColor: Colors.GREY_400,
  },
  iconContainer: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 16,
  },
});
