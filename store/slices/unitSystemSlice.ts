import { createSlice } from '@reduxjs/toolkit';
import {
  DepthUnits,
  WeightUnits,
  DiameterUnits,
  PressureUnits,
  CapacityUnits,
  TempUnits,
  ResistivityUnits,
  ResistanceUnits,
  PumpRateUnits,
  VelocityUnits,
  AllUnitsType,
} from './types';

export interface UnitSystemState {
  depthUnits: 'ft' | 'm';
  weightUnits: 'lbs' | 'kg';
  diameterUnits: 'in' | 'mm';
  pressureUnits: 'psi' | 'atm';
  capacityUnits: 'bbl/100ft' | 'cu.m/m';
  tempUnits: 'degF' | 'degC';
  resistivityUnits: 'Ohm/Kft' | 'Ohm/Km';
  resistanceUnits: 'Ohm';
  microSecUnits: 'usec';
  pumpRateUnits: 'bbl/min' | 'm3/min';
  velocityUnits: 'ft/min' | 'm/min';
  allUnits: AllUnitsType;
}

const initialState: UnitSystemState = {
  depthUnits: DepthUnits.FT,
  weightUnits: WeightUnits.LBS,
  diameterUnits: DiameterUnits.INCH,
  pressureUnits: PressureUnits.PSI,
  capacityUnits: CapacityUnits.BBL,
  tempUnits: TempUnits.DEGF,
  resistivityUnits: ResistivityUnits.OHM_KFT,
  resistanceUnits: ResistanceUnits.OHM,
  microSecUnits: 'usec',
  pumpRateUnits: PumpRateUnits.BBLMIN,
  velocityUnits: VelocityUnits.FTMIN,
  allUnits: 'ENGLISH',
};

const unitSystemSlice = createSlice({
  name: 'unitSystem',
  initialState,
  reducers: {
    changeDepthUnits(state, action) {
      state.depthUnits = action.payload;
    },
    changeWeightUnits(state, action) {
      state.weightUnits = action.payload;
    },
    changeDiameterUnits(state, action) {
      state.diameterUnits = action.payload;
    },
    changePressureUnits(state, action) {
      state.pressureUnits = action.payload;
    },
    changeCapacityUnits(state, action) {
      state.capacityUnits = action.payload;
    },
    changeTempUnits(state, action) {
      state.tempUnits = action.payload;
    },
    changeResistivityUnits(state, action) {
      state.resistivityUnits = action.payload;
    },
    changePumpRateUnits(state, action) {
      state.pumpRateUnits = action.payload;
    },
    changeVelocityUnits(state, action) {
      state.velocityUnits = action.payload;
    },
    changeAll(state, action) {
      state.allUnits = action.payload;

      if (action.payload === 'ENGLISH') {
        state.depthUnits = DepthUnits.FT;
        state.weightUnits = WeightUnits.LBS;
        state.diameterUnits = DiameterUnits.INCH;
        state.pressureUnits = PressureUnits.PSI;
        state.capacityUnits = CapacityUnits.BBL;
        state.tempUnits = TempUnits.DEGF;
        state.resistivityUnits = ResistivityUnits.OHM_KFT;
        state.pumpRateUnits = PumpRateUnits.BBLMIN;
        state.velocityUnits = VelocityUnits.FTMIN;
      } else {
        state.depthUnits = DepthUnits.M;
        state.weightUnits = WeightUnits.KG;
        state.diameterUnits = DiameterUnits.MM;
        state.pressureUnits = PressureUnits.ATM;
        state.capacityUnits = CapacityUnits.M3;
        state.tempUnits = TempUnits.DEGC;
        state.resistivityUnits = ResistivityUnits.OHM_KM;
        state.pumpRateUnits = PumpRateUnits.M3MIN;
        state.velocityUnits = VelocityUnits.MMIN;
      }
    },
  },
});

export const {
  changeDepthUnits,
  changeDiameterUnits,
  changeWeightUnits,
  changePressureUnits,
  changeCapacityUnits,
  changeTempUnits,
  changeResistivityUnits,
  changePumpRateUnits,
  changeVelocityUnits,
  changeAll,
} = unitSystemSlice.actions;
export const unitSystemReducer = unitSystemSlice.reducer;
