import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styleVariables as st } from '../styles/global';

import { ChangeEvent, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState, changeCable } from '../store';
import { cablesData } from '../database/cables';

export const CableSelector: FC = () => {
  const dispatch = useDispatch();
  const { currentCable } = useSelector((state: StoreState) => state.weakPoint);

  const handleCableChange = (itemValue: string) => {
    const selectedCable = cablesData.find((cable) => cable.type === itemValue);
    if (selectedCable) {
      dispatch(changeCable(selectedCable));
    }
  };

  return (
    <View style={inputGroup}>
      <Text>Choose Cable Type:</Text>
      {/* <select
        className="input-item"
        id="cable"
        name="cable"
        value={currentCable.type}
        onChange={handleCableChange}
      >
        {cablesData.map((cable) => {
          return (
            <option
              key={cable.type}
              value={cable.type}
              aria-labelledby="choose-cable"
            >
              {cable.type}
            </option>
          );
        })}
      </select> */}
      <Picker
        selectedValue={currentCable.type}
        onValueChange={handleCableChange}
      >
        {cablesData.map((cable) => {
          return (
            <Picker.Item
              key={cable.type}
              value={cable.type}
              label={cable.type}
            />
          );
        })}
      </Picker>
    </View>
  );
};

const { inputGroup } = StyleSheet.create({
  inputGroup: {
    margin: st.spacingDefault,
    display: 'flex',
    flexDirection: 'column',
  },
});
