import { TextPropsAndroid, Text as NativeText } from 'react-native';
import { Poppins, Roboto } from 'utils/fonts';

interface TextProps extends TextPropsAndroid {
  children: string;
  fontWeight: 'REGULAR' | 'MEDIUM' | 'SEMIBOLD';
  fontFamily: 'Poppins' | 'Roboto';
  marginTop?: number;
  marginBottom?: number;
  marginVertical?: number;
  paddingRight?: number;
  textDecorationLine?: 'underline' | 'none';
  color: string;
  fontSize: number;
}

export function Text({
  fontFamily,
  fontWeight,
  fontSize,
  paddingRight,
  marginTop,
  marginBottom,
  marginVertical,
  color,
  textDecorationLine,
  children,
  ...props
}: TextProps) {
  const font: any = fontFamily == 'Poppins' ? Poppins : Roboto;

  return (
    <NativeText
      style={{
        fontFamily: font[fontWeight] ?? 'Roboto',
        color,
        fontSize,
        marginTop,
        marginBottom,
        marginVertical,
        textDecorationLine,
        paddingRight,
      }}
      {...props}
    >
      {children}
    </NativeText>
  );
}
