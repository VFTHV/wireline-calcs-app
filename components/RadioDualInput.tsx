import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styleVariables as st } from '../styles/global';

interface RadioDualInputProps {
  values: [string, string];
  onPress: (value: string) => void;
  currentValue: string;
}

export const RadioDualInput = ({
  values,
  onPress,
  currentValue,
}: RadioDualInputProps) => {
  const renderCurrentValueStyle = (value: string) => {
    const currentValueStyle = {
      backgroundColor: st.lightColor,
      color: st.secondaryColor,
      fontFamily: 'Outfit-Bold',
    };
    return value === currentValue ? currentValueStyle : {};
  };

  return (
    <View style={radioContainer}>
      <View style={radioItems}>
        <TouchableOpacity
          onPress={() => onPress(values[0])}
          style={[radioItem, left, renderCurrentValueStyle(values[0])]}
        >
          <Text style={[radioText, renderCurrentValueStyle(values[0])]}>
            {values[0].toUpperCase()}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onPress(values[1])}
          style={[radioItem, right, renderCurrentValueStyle(values[1])]}
        >
          <Text style={[radioText, renderCurrentValueStyle(values[1])]}>
            {values[1].toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { radioContainer, radioItems, left, radioItem, right, radioText } =
  StyleSheet.create({
    radioContainer: {
      marginVertical: st.spacingDefault,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    radioItems: {
      width: '60%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    left: {
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    right: {
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
    radioItem: {
      paddingVertical: 5,
      backgroundColor: st.secondaryColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    radioText: {
      fontFamily: 'Outfit-Light',
      fontSize: st.fontSizePri,
      color: st.primaryColor,
    },
  });
