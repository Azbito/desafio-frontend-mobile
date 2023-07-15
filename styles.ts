import { StyleSheet } from 'react-native';
import { Colors } from 'utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 24,
  },
  loginContainer: {
    width: '100%',
  },
  loginWithContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  loginWithContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '78%',
  },
  signUpContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 32,
    marginBottom: 106.5,
  },
  googleContainer: {
    marginTop: 24,
    width: '100%',
  },
});
