import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface CardAcceptedStylesProps {
  container: ViewStyle;
}

export const styles = StyleSheet.create<CardAcceptedStylesProps>({
  container: {
    borderWidth: 1,
    borderColor: Colors.GREY_100,
    width: '96%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 99,
    paddingVertical: 16,
  },
});
