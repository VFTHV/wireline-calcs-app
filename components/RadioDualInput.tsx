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
        <View style={[left]}>
          {/* <input
          type="radio"
          name="option1"
          value={values[0]}
          onChange={onChange}
          checked={currentValue === values[0]}
        /> */}
          {/* <Text style={[left, labelContainer]}>{values[0].toUpperCase()}</Text> */}
          <Text style={[labelContainer]}>FLUID</Text>
        </View>
        <View style={[right]}>
          {/* <input
          type="radio"
          name="option2"
          value={values[1]}
          onChange={onChange}
          checked={currentValue === values[1]}
        /> */}
          <Text style={[labelContainer, right]}>GAS</Text>
        </View>
      </View>
    </View>
  );
};

const { radioContainer, radioItems, left, labelContainer, right } =
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
      borderWidth: 1,
      borderColor: 'red',
    },
    left: {
      paddingVertical: 10,
      backgroundColor: st.secondaryColor,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      flex: 1,
    },
    labelContainer: {},
    right: {
      paddingVertical: 10,
      backgroundColor: st.secondaryColor,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
