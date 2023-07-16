import { StyleSheet } from 'react-native';
import { Colors } from 'utils/colors';

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Regular',
    color: Colors.GREY_400,
    marginTop: 16,
  },
  confidentialInputContainer: {
    position: 'relative',
  },
  eye: {
    position: 'absolute',
    right: 16,
    top: 20,
  },
  confidentialInput: {
    fontFamily: 'Roboto',
    letterSpacing: 2.8,
    fontSize: 14,
    borderWidth: 1,
    borderColor: Colors.ORANGE_700,
    borderRadius: 16,
    width: '100%',
    paddingHorizontal: 17,
    paddingVertical: 16,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    borderWidth: 1,
    borderColor: Colors.ORANGE_700,
    borderRadius: 16,
    width: '100%',
    paddingHorizontal: 17,
    paddingVertical: 15,
  },
});
