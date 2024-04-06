import { ChangeEvent } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { maxInputValues } from '../database/maxInputValues';
import { MeasurementType, UnitType } from '../store/slices/types';

interface InputDataProps {
  children: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  typeId: MeasurementType;
  value: number;
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
    if (value > maxInput) {
      return (
        <div className="error-message">
          value may be outside of normal operating range
        </div>
      );
    }
  };

  return (
    <View style={inputGroup}>
      <Text>{children}</Text>
      <View>
        <TextInput
          style={[inputItem, inputWithUnits]}
          value={value ? Math.abs(value).toString() : ''}
          // type="number"
          // onChange={onChange}
          placeholder={placeholder}
        />
        <span>{unit}</span>
      </View>
      {renderError()}
    </View>
  );
};

const { inputGroup, inputItem, inputWithUnits } = StyleSheet.create({
  inputGroup: {},
  inputItem: {},
  inputWithUnits: {},
});
