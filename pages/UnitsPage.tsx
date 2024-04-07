import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {
  DepthUnits,
  WeightUnits,
  DiameterUnits,
  PressureUnits,
  CapacityUnits,
  TempUnits,
  ResistivityUnits,
  MeasurementType,
  PumpRateUnits,
  VelocityUnits,
  AllUnitsType,
} from '../store/slices/types';
import { RadioDualInput } from '../components/RadioDualInput';
import {
  StoreState,
  changeDepthUnits,
  changeWeightUnits,
  changeDiameterUnits,
  changePressureUnits,
  changeCapacityUnits,
  changeTempUnits,
  changeResistivityUnits,
  changePumpRateUnits,
  changeVelocityUnits,
  changeAll,
} from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { measurementObject as mo } from '../store/slices/types';
import { styleVariables as st } from '../styles/global';

export default function UnitsPage() {
  const dispatch = useDispatch();
  const {
    depthUnits,
    weightUnits,
    diameterUnits,
    pressureUnits,
    capacityUnits,
    tempUnits,
    resistivityUnits,
    allUnits,
    pumpRateUnits,
    velocityUnits,
  } = useSelector((state: StoreState) => state.unitSystem);

  return (
    <ScrollView>
      <View style={marginVertical}>
        <Text style={h4Text}>CHANGE ALL UNITS</Text>
      </View>
      <RadioDualInput
        values={['ENGLISH', 'METRIC']}
        onPress={(value) => dispatch(changeAll(value))}
        currentValue={allUnits}
      />
      <View style={marginVertical}>
        <Text style={h4Text}>CHANGE UNITS ONE BY ONE</Text>
      </View>
      <RadioDualInput
        values={[DepthUnits.FT, DepthUnits.M]}
        onPress={(value) => dispatch(changeDepthUnits(value))}
        currentValue={depthUnits}
      />
      <RadioDualInput
        values={[PressureUnits.PSI, PressureUnits.ATM]}
        onPress={(value) => dispatch(changePressureUnits(value))}
        currentValue={pressureUnits}
      />
      <RadioDualInput
        values={[DiameterUnits.INCH, DiameterUnits.MM]}
        onPress={(value) => dispatch(changeDiameterUnits(value))}
        currentValue={diameterUnits}
      />
      <RadioDualInput
        values={[WeightUnits.LBS, WeightUnits.KG]}
        onPress={(value) => dispatch(changeWeightUnits(value))}
        currentValue={weightUnits}
      />
      <RadioDualInput
        values={[CapacityUnits.BBL, CapacityUnits.M3]}
        onPress={(value) => dispatch(changeCapacityUnits(value))}
        currentValue={capacityUnits}
      />
      <RadioDualInput
        values={[TempUnits.DEGF, TempUnits.DEGC]}
        onPress={(value) => dispatch(changeTempUnits(value))}
        currentValue={tempUnits}
      />
      <RadioDualInput
        values={[ResistivityUnits.OHM_KFT, ResistivityUnits.OHM_KM]}
        onPress={(value) => dispatch(changeResistivityUnits(value))}
        currentValue={resistivityUnits}
      />
      <RadioDualInput
        values={[PumpRateUnits.BBLMIN, PumpRateUnits.M3MIN]}
        onPress={(value) => dispatch(changePumpRateUnits(value))}
        currentValue={pumpRateUnits}
      />
      <RadioDualInput
        values={[VelocityUnits.FTMIN, VelocityUnits.MMIN]}
        onPress={(value) => dispatch(changeVelocityUnits(value))}
        currentValue={velocityUnits}
      />
    </ScrollView>
  );
}

const { h4Text, marginVertical } = StyleSheet.create({
  marginVertical: {
    marginVertical: 10,
  },
  h4Text: {
    textAlign: 'center',
    fontFamily: 'Outfit-Bold',
    color: st.secondaryColor,
    fontSize: st.fontSizePri,
  },
});
