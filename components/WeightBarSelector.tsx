import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { weightBarsData } from '../database/weightBars';
import TableRow from './TableRow';
import { styleVariables as st } from '../styles/global';

export const WeightBarSelector = () => {
  const weightBarODs = [...new Set(weightBarsData.map((bar) => bar.od))];
  const [od, setOd] = useState<string>(weightBarODs[0]);

  const filteredByOD = weightBarsData.filter((bar) => bar.od === od);
  const filteredByType = [...new Set(filteredByOD.map((bar) => bar.type))];

  return (
    <>
      <View style={inputGroup}>
        <Text style={text}>Weight Bar OD:</Text>
        <View style={pickerView}>
          <Picker
            onValueChange={(value: string) => setOd(value)}
            selectedValue={od}
          >
            {weightBarODs.map((od) => (
              <Picker.Item key={od} value={od} label={od} />
            ))}
          </Picker>
        </View>
      </View>
      {filteredByType.map((type, i) => {
        const capType =
          type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

        return (
          <View style={collection} key={i}>
            <TableRow data={capType} units="">
              Material:
            </TableRow>
            {filteredByOD
              .filter((bar) => bar.type === type)
              .map((bar) => (
                <TableRow data={bar.weight} units="lbs" key={bar.weight}>
                  {`Length ${bar.length} ft`}
                </TableRow>
              ))}
          </View>
        );
      })}
    </>
  );
};

const { inputGroup, text, pickerView, collection } = StyleSheet.create({
  inputGroup: {
    margin: st.spacingDefault,
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    color: st.secondaryColor,
    fontSize: st.fontSizePri,
    fontFamily: 'Outfit-Light',
  },
  pickerView: {
    height: 32,
    borderRadius: 5,
    backgroundColor: st.secondaryColor,
    justifyContent: 'center',
  },
  collection: {
    marginTop: 5,
  },
});
