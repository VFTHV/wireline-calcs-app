import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { InputData } from '../components/InputData';
import { PipeSelector } from '../components/PipeSelector';
import TableRow from '../components/TableRow';
import { casingData } from '../database/casingsTubings';
import { useFluidVelocityCalc } from '../logics/useFluidVelocityCalc';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';

export default function FluidVelocity() {
  const { casing } = useSelector((state: StoreState) => state.cbl);
  const unitSystem = useSelector((state: StoreState) => state.unitSystem);
  const [pumpRate, setPumpRate] = useState<number>(0);

  const fluidVelocity = useFluidVelocityCalc(pumpRate, casing?.id, unitSystem);

  return (
    <View>
      <PipeSelector pipeData={casingData} typeId="casing" />
      <InputData
        typeId="pumpRate"
        onChange={(value) => setPumpRate(Number(value))}
        value={pumpRate}
        unit={unitSystem.pumpRateUnits}
      >
        Pumping rate
      </InputData>
      <TableRow data={fluidVelocity} units={unitSystem.velocityUnits}>
        Fluid Velocity
      </TableRow>
    </View>
  );
}

const styles = StyleSheet.create({});
