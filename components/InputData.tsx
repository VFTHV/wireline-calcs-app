import {
  StyleSheet,
  Text,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { maxInputValues } from '../database/maxInputValues';
import { MeasurementType, UnitType } from '../store/slices/types';

interface InputDataProps {
  children: string;
  onChange: (value: string) => void;
  typeId: MeasurementType;
  value: string;
  unit: UnitType;
  placeholder?: string;
}

export const InputData = ({
  children,
  onChange,
  typeId,
  value,
  unit,
  placeholder,
}: InputDataProps) => {
  const renderError = () => {
    const maxInput = maxInputValues[typeId][unit];
    if (!maxInput) return;
    if (+value > maxInput) {
      return (
        <Text style={errorMessage}>
          value may be outside of normal operating range
        </Text>
      );
    }
  };

  const correctValue = Number(value) > 0 ? Math.abs(+value).toString() : '';

  return (
    <View style={inputGroup}>
      <Text>{children}</Text>
      <View>
        <TextInput
          keyboardType="numeric"
          style={[inputItem, inputWithUnits]}
          // value={value ? Math.abs(+value).toString() : ''}
          value={correctValue}
          onChangeText={onChange}
          placeholder={placeholder}
        />
        <Text>{unit}</Text>
      </View>
      {/* {renderError()} */}
    </View>
  );
};

const { inputGroup, inputItem, inputWithUnits, errorMessage } =
  StyleSheet.create({
    inputGroup: {},
    inputItem: {},
    inputWithUnits: {},
    errorMessage: {},
  });
