import { createSlice } from '@reduxjs/toolkit';
import { CableSpecs, cablesData } from '../../database/cables';
import { EnvironmentType, EnvironmentUnits } from './types';

export interface WeakPointState {
  // cablesData: CableSpecs[];
  currentCable: CableSpecs;
  depth: number;
  toolWeight: number;
  environment: EnvironmentType;
}

const initialState: WeakPointState = {
  // cablesData,
  currentCable: cablesData[0],
  depth: 0,
  toolWeight: 0,
  environment: EnvironmentUnits.FLUID,
};

const weakPointSlice = createSlice({
  name: 'weakPoint',
  initialState,
  reducers: {
    changeCable(state, action: { payload: CableSpecs }) {
      state.currentCable = action.payload;
    },
    changeOuterBS(state, action: { payload: number }) {
      state.currentCable.outerArmorBS = action.payload;
    },
    changeInnerBS(state, action: { payload: number }) {
      state.currentCable.innerArmorBS = action.payload;
    },
    changeWeightInAir(state, action: { payload: number }) {
      state.currentCable.weightInAir = action.payload;
    },
    changeMaxTension(state, action: { payload: number }) {
      state.currentCable.maxTension = action.payload;
    },
    changeStretchCoef(state, action: { payload: number }) {
      state.currentCable.stretchCoeff = action.payload;
    },
    changeToolWeight(state, action: { payload: number }) {
      state.toolWeight = action.payload;
    },
    changeDepth(state, action: { payload: number }) {
      state.depth = action.payload;
    },
    changeEnvironment(state, action) {
      state.environment = action.payload;
    },
  },
});

export const {
  changeCable,
  changeDepth,
  changeToolWeight,
  changeEnvironment,
  changeOuterBS,
  changeInnerBS,
  changeWeightInAir,
  changeMaxTension,
  changeStretchCoef,
} = weakPointSlice.actions;
export const weakPointReducer = weakPointSlice.reducer;
