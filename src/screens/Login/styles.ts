import { Dimensions, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';

interface OverviewStyleProps {
  container: ViewStyle;
  loginContainer: ViewStyle;
  loginWithContainer: ViewStyle;
  loginWithContent: ViewStyle;
  signUpContainer: ViewStyle;
  googleContainer: ViewStyle;
}

const SCREEN_WIDTH = Dimensions.get('screen').width;
export const styles: OverviewStyleProps = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
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
