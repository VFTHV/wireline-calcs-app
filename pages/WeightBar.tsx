import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { WeightBarSelector } from '../components/WeightBarSelector';
import { InputData } from '../components/InputData';
import TableRow from '../components/TableRow';

import { useDispatch, useSelector } from 'react-redux';
import {
  changeDiameter,
  changePressure,
  changeWeight,
  changePercentOverBalance,
  StoreState,
} from '../store';
import { useWeightBarCalc } from '../logics/useWeighBarCalc';

export default function WeightBar() {
  const dispatch = useDispatch();
  const { diameter, wellPressure, weight, percentOverBalance } = useSelector(
    (state: StoreState) => state.weightBar
  );
  const unitSystem = useSelector((state: StoreState) => state.unitSystem);

  const { balanceWeight, finalWeight, sinkerBarWeight } = useWeightBarCalc(
    Number(diameter),
    wellPressure,
    weight,
    percentOverBalance,
    unitSystem
  );

  return (
    <ScrollView>
      <InputData
        onChange={(value) => dispatch(changeDiameter(value))}
        typeId={'diameter'}
        value={diameter}
        unit={unitSystem.diameterUnits}
      >
        Cable Diameter:
      </InputData>
      <InputData
        onChange={(value) => dispatch(changePressure(+value))}
        typeId={'pressure'}
        value={wellPressure}
        unit={unitSystem.pressureUnits}
      >
        Well Pressure:
      </InputData>
      <InputData
        onChange={(value) => dispatch(changeWeight(+value))}
        typeId={'toolWeight'}
        value={weight}
        unit={unitSystem.weightUnits}
      >
        Tool Weight:
      </InputData>
      <InputData
        onChange={(value) => dispatch(changePercentOverBalance(+value))}
        typeId={'overBalance'}
        value={percentOverBalance}
        unit={'%'}
      >
        Percent over Balance:
      </InputData>

      <TableRow data={balanceWeight} units={unitSystem.weightUnits}>
        BALANCE WEIGHT
      </TableRow>
      <TableRow data={finalWeight} units={unitSystem.weightUnits}>
        FINAL WEIGHT
      </TableRow>
      <TableRow data={sinkerBarWeight} units={unitSystem.weightUnits}>
        SINKER BAR WEIGHT
      </TableRow>

      <WeightBarSelector />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
