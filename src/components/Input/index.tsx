import { useState } from 'react';
import { TextInput, TextInputProps, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from 'utils/colors';
import { Text } from 'components/Text';
import { inputStyles } from './styles';

interface InputProps extends TextInputProps {
  isConfidential?: boolean;
  label?: string;
  border?: borderProp;
}

export type borderProp = 'RIGHT' | 'WRONG' | null;

export function Input({ isConfidential, label, border, ...props }: InputProps) {
  const [isHidden, setIsHidden] = useState(true);
  const styles = inputStyles(border || 'EMPTY');

  if (isConfidential) {
    return (
      <View>
        <Text
          color={Colors.GREY_400}
          fontFamily="Poppins"
          fontWeight="REGULAR"
          fontSize={13}
          marginTop={16}
        >
          Senha
        </Text>
        <View style={styles.confidentialInputContainer}>
          <TextInput
            style={styles.confidentialInput}
            textContentType="password"
            secureTextEntry={isHidden}
            maxLength={props.maxLength ?? 240}
            {...props}
          />
          {isHidden ? (
            <Icon
              onPress={() => setIsHidden(!isHidden)}
              style={styles.eye}
              name="eye-off"
              size={24}
              color={Colors.ORANGE_600}
            />
          ) : (
            <Icon
              onPress={() => setIsHidden(!isHidden)}
              style={styles.eye}
              name="eye"
              size={24}
              color={Colors.ORANGE_600}
            />
          )}
        </View>
      </View>
    );
  }

  return (
    <View>
      {label && (
        <Text
          color={Colors.GREY_400}
          fontFamily="Poppins"
          fontWeight="REGULAR"
          fontSize={13}
          marginTop={16}
        >
          {label}
        </Text>
      )}
      <TextInput style={styles.input} {...props} maxLength={props.maxLength ?? 300} />
    </View>
  );
}
