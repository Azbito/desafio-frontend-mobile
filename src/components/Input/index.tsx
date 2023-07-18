import { useState } from 'react';
import { TextInput, TextInputProps, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from 'utils/colors';
import { Text } from 'components/Text';
import { inputStyles } from './styles';

interface InputProps extends TextInputProps {
  isConfidential?: boolean;
  label?: string;
  error?: string;
}

export function Input({ isConfidential, label, error = '', ...props }: InputProps) {
  const [isHidden, setIsHidden] = useState(true);
  const styles = inputStyles({ hasError: error !== '' });

  if (isConfidential) {
    return (
      <View style={{ position: 'relative' }}>
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
            <TouchableOpacity onPress={() => setIsHidden(!isHidden)}>
              <Icon style={styles.eye} name="eye-off" size={24} color={Colors.ORANGE_600} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setIsHidden(!isHidden)}>
              <Icon style={styles.eye} name="eye" size={24} color={Colors.ORANGE_600} />
            </TouchableOpacity>
          )}
        </View>
        {error && (
          <Text fontFamily="Poppins" color={Colors.RED_600} fontWeight="REGULAR" fontSize={10}>
            {error}
          </Text>
        )}
      </View>
    );
  }

  return (
    <View style={{ position: 'relative' }}>
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
      {error && (
        <Text fontFamily="Poppins" color={Colors.RED_600} fontWeight="REGULAR" fontSize={10}>
          {error}
        </Text>
      )}
    </View>
  );
}
