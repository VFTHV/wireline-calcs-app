import { StyleSheet, Text, View, TextInput } from 'react-native';
import { maxInputValues } from '../database/maxInputValues';
import { MeasurementType, UnitType } from '../store/slices/types';
import { styleVariables as st } from '../styles/global';

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
      <Text style={labelText}>{children}</Text>
      <View style={inputValues}>
        <TextInput
          keyboardType="numeric"
          style={inputItem}
          value={correctValue}
          onChangeText={onChange}
          placeholder={placeholder}
        />
        <Text style={units}>{unit}</Text>
      </View>
      {renderError()}
    </View>
  );
};

const { inputGroup, labelText, inputValues, inputItem, units, errorMessage } =
  StyleSheet.create({
    inputGroup: {
      marginHorizontal: st.spacingDefault,
      marginVertical: st.spacingDefault / 2,
      display: 'flex',
      flexDirection: 'column',
    },
    labelText: {
      fontFamily: 'Outfit-Light',
      color: st.secondaryColor,
      fontSize: st.fontSizePri,
    },
    inputValues: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    inputItem: {
      flex: 1,
      height: 32,
      backgroundColor: 'white',
      textAlign: 'left',
      paddingLeft: 5,
      fontFamily: 'Outfit-Light',
      borderRadius: 5,
    },
    units: {
      fontFamily: 'Outfit-Light',
      color: st.secondaryColor,
    },
    errorMessage: {
      fontFamily: 'Outfit-Light',
    },
  });
