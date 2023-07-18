import { TextPropsAndroid, Text as NativeText } from 'react-native';
import { Poppins, Roboto } from 'utils/fonts';
import { ReactNode } from 'react';

interface TextProps extends TextPropsAndroid {
  children: ReactNode;
  fontWeight: 'REGULAR' | 'MEDIUM' | 'SEMIBOLD' | 'BOLD';
  fontFamily: 'Poppins' | 'Roboto';
  marginTop?: number;
  marginBottom?: number;
  marginVertical?: number;
  paddingRight?: number;
  textDecorationLine?: 'underline' | 'none';
  color: string;
  fontSize: number;
  textAlign?: 'center' | 'left' | 'right';
}

export function Text({
  fontFamily,
  fontWeight,
  fontSize,
  marginTop,
  marginBottom,
  marginVertical,
  color,
  textDecorationLine,
  children,
  textAlign,
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
        textAlign,
      }}
      {...props}
    >
      {children}
    </NativeText>
  );
}
