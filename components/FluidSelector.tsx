import React from 'react';
import { Text, View } from 'react-native';
import { fluidsData } from '../database/cbl';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState, changeFluid } from '../store';
import { Picker } from '@react-native-picker/picker';
import { pickerStyles } from '../styles/global';

export const FluidSelector = () => {
  const types = [...new Set(fluidsData.map((fluid) => fluid.type))];
  const { fluid } = useSelector((store: StoreState) => store.cbl);
  const dispatch = useDispatch();

  return (
    <View style={inputGroup}>
      <Text style={text}>Fluid Type:</Text>
      <View style={pickerView}>
        <Picker
          selectedValue={fluid.type}
          onValueChange={(value: string) => dispatch(changeFluid(value))}
        >
          {types.map((type, i) => {
            return <Picker.Item key={i} value={type} label={type} />;
          })}
        </Picker>
      </View>
    </View>
  );
};

const { text, inputGroup, pickerView } = pickerStyles;
