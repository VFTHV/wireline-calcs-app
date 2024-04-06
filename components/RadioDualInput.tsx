import { FC, ChangeEvent } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

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
      <View>
        {/* <input
          type="radio"
          name="option1"
          value={values[0]}
          onChange={onChange}
          checked={currentValue === values[0]}
        /> */}
        <Text style={[left, labelContainer]}>{values[0].toUpperCase()}</Text>
      </View>
      <View>
        {/* <input
          type="radio"
          name="option2"
          value={values[1]}
          onChange={onChange}
          checked={currentValue === values[1]}
        /> */}
        <Text style={[labelContainer, right]}>{values[1].toUpperCase()}</Text>
      </View>
    </View>
  );
};

const { radioContainer, left, labelContainer, right } = StyleSheet.create({
  radioContainer: {},
  left: {},
  labelContainer: {},
  right: {},
});
