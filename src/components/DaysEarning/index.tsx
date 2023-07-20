import { Text } from 'components/Text';
import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { FORMATTED_MONTH, TODAYS_DATE } from 'utils/date';
import { formattedBRL } from 'utils/formattedBRL';
import { styles } from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from 'hooks/useAppSelector';

export function DaysEarning() {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const wallet = 150;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.ORANGE_500, Colors.ORANGE_800]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradientContainer}
      >
        <View style={styles.earningContainer}>
          <Text color={Colors.WHITE} fontFamily="Poppins" fontSize={16} fontWeight="MEDIUM">
            Ganhos do Dia
          </Text>
          {!isHidden ? (
            <Text color={Colors.WHITE} fontFamily="Roboto" fontSize={30} fontWeight="BOLD">
              {formattedBRL(wallet)}
            </Text>
          ) : (
            <View style={styles.hiddenValueContainer}>
              <Text color={Colors.WHITE} fontFamily="Roboto" fontSize={30} fontWeight="BOLD">
                ----
              </Text>
            </View>
          )}
        </View>

        <View style={styles.dateContainer}>
          <Text color={Colors.WHITE} fontFamily="Poppins" fontSize={16} fontWeight="MEDIUM">
            {TODAYS_DATE.DAY}/{FORMATTED_MONTH}
          </Text>
          <TouchableOpacity onPress={() => setIsHidden(!isHidden)}>
            {isHidden ? (
              <Icon style={styles.eyeOff} name="eye-off-outline" size={26.3} />
            ) : (
              <Icon style={styles.eyeOff} name="eye-outline" size={26.3} />
            )}
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
