import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface InputStylesProps {
  title: ViewStyle;
  confidentialInputContainer: ViewStyle;
  eye: ViewStyle;
  confidentialInput: ViewStyle;
  input: ViewStyle;
}

export const inputStyles = ({ hasError }: { hasError: boolean }): InputStylesProps => {
  const styles: InputStylesProps = StyleSheet.create<InputStylesProps>({
    title: {
      fontFamily: 'Poppins-Regular',
      color: Colors.GREY_500,
      marginTop: 16,
    },
    confidentialInputContainer: {
      position: 'relative',
    },
    eye: {
      position: 'absolute',
      right: 16,
      top: -35,
    },
    confidentialInput: {
      fontFamily: 'Roboto',
      letterSpacing: 2.8,
      fontSize: 14,
      borderWidth: 1,
      borderColor: hasError ? Colors.RED_600 : Colors.ORANGE_800,
      borderRadius: 16,
      width: '100%',
      height: 44,
      paddingHorizontal: 17,
      paddingVertical: 16,
    },
    input: {
      fontFamily: 'Poppins-Regular',
      borderWidth: 1,
      borderColor: hasError ? Colors.RED_600 : Colors.ORANGE_800,
      borderRadius: 16,
      width: '100%',
      height: 44,
      paddingHorizontal: 17,
    },
  });

  return styles;
};
