import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface SocialMediaButtonStylesProps {
  buttonContainer: ViewStyle;
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
    gap: 8,
    color: Colors.GREY_400,
    borderColor: Colors.GREY_400,
  },
});
