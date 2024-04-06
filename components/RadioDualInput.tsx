import { StyleSheet, Text, View } from 'react-native';
import { styleVariables as st } from '../styles/global';

interface RadioDualInputProps {
  values: [string, string];
  onClick: () => void;
  currentValue: string;
}

export const RadioDualInput = ({
  values,
  onClick,
  currentValue,
}: RadioDualInputProps) => {
  return (
    <View style={radioContainer}>
      <View style={radioItems}>
        <View style={[radioItem, left]}>
          {/* <input
          type="radio"
          name="option1"
          value={values[0]}
          onChange={onChange}
          checked={currentValue === values[0]}
        /> */}
          {/* <Text style={[left, labelContainer]}>{values[0].toUpperCase()}</Text> */}
          <Text>FLUID</Text>
        </View>
        <View style={[radioItem, right]}>
          {/* <input
          type="radio"
          name="option2"
          value={values[1]}
          onChange={onChange}
          checked={currentValue === values[1]}
        /> */}
          <Text>GAS</Text>
        </View>
      </View>
    </View>
  );
};

const { radioContainer, radioItems, left, radioItem, right } =
  StyleSheet.create({
    radioContainer: {
      marginVertical: st.spacingDefault,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    radioItems: {
      width: '50%',
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
  });
