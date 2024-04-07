import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { weightBarsData } from '../database/weightBars';
import TableRow from './TableRow';

export const WeightBarSelector = () => {
  const weightBarODs = [...new Set(weightBarsData.map((bar) => bar.od))];
  const [od, setOd] = useState<string>(weightBarODs[0]);

  const filteredByOD = weightBarsData.filter((bar) => bar.od === od);
  const filteredByType = [...new Set(filteredByOD.map((bar) => bar.type))];

  return (
    <>
      <View style={inputGroup}>
        <Text style={labelText}>Weight Bar OD:</Text>
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
          <View style={table} key={i}>
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

const { inputGroup, labelText, pickerView, table } = StyleSheet.create({
  inputGroup: {},
  labelText: {},
  pickerView: {},
  table: {},
});
