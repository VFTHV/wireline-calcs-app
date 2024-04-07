import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import CableSelector from '../components/CableSelector';
import { CurrentCableSpecs } from '../components/CurrentCableSpecs';
import { InputData } from '../components/InputData';
import TableRow from '../components/TableRow';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import { useTempLengthCalc } from '../logics/useTempLengthCalc';

export default function TempCorrectedLength() {
  const [temp, setTemp] = useState(0);
  const [resistance, setResistance] = useState(0);
  const { tempUnits, resistanceUnits } = useSelector(
    (state: StoreState) => state.unitSystem
  );

  const { currentCable } = useSelector((state: StoreState) => state.weakPoint);
  const unitSystem = useSelector((state: StoreState) => state.unitSystem);

  const { length } = useTempLengthCalc(
    resistance,
    currentCable,
    temp,
    unitSystem
  );

  return (
    <View>
      <InputData
        value={temp}
        onChange={(value) => setTemp(+value)}
        typeId="temperature"
        unit={tempUnits}
      >
        Ambient Temperature
      </InputData>
      <InputData
        value={resistance}
        onChange={(value) => setResistance(+value)}
        typeId="resistance"
        unit={resistanceUnits}
      >
        Measured Cable Resistance
      </InputData>

      <CableSelector />
      <CurrentCableSpecs specs={['conductorResistance']} />
      <TableRow
        data={length === Infinity ? 0 : length}
        units={unitSystem.depthUnits}
      >
        Temperature Corrected Cable Length
      </TableRow>
    </View>
  );
}

const styles = StyleSheet.create({});
