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
  width?: number | string;
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
  width,
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
        width,
      }}
      {...props}
    >
      {children}
    </NativeText>
  );
}
