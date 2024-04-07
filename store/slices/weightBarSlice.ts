import { createSlice } from '@reduxjs/toolkit';

export interface WeightBarState {
  diameter: string;
  weight: number;
  wellPressure: number;
  percentOverBalance: number;
}

const initialState: WeightBarState = {
  diameter: '',
  weight: 0,
  wellPressure: 0,
  percentOverBalance: 0,
};

const weightBarSlice = createSlice({
  name: 'weightBar',
  initialState,
  reducers: {
    changeDiameter(state, action: { payload: string }) {
      state.diameter = action.payload;
    },
    changeWeight(state, action: { payload: number }) {
      state.weight = action.payload;
    },
    changePressure(state, action: { payload: number }) {
      state.wellPressure = action.payload;
    },
    changePercentOverBalance(state, action: { payload: number }) {
      state.percentOverBalance = action.payload;
    },
  },
});

export const {
  changeDiameter,
  changeWeight,
  changePressure,
  changePercentOverBalance,
} = weightBarSlice.actions;
export const weightBarReducer = weightBarSlice.reducer;
