import { createSlice } from '@reduxjs/toolkit';

export interface WeightBarState {
  diameter: number;
  weight: number;
  wellPressure: number;
  percentOverBalance: number;
}

const initialState: WeightBarState = {
  diameter: 0,
  weight: 0,
  wellPressure: 0,
  percentOverBalance: 0,
};

const weightBarSlice = createSlice({
  name: 'weightBar',
  initialState,
  reducers: {
    changeDiameter(state, action) {
      console.log(typeof action.payload);
      state.diameter = action.payload;
    },
    changeWeight(state, action) {
      state.weight = action.payload;
    },
    changePressure(state, action) {
      state.wellPressure = action.payload;
    },
    changePercentOverBalance(state, action) {
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
