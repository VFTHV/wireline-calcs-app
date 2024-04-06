import { createSlice } from '@reduxjs/toolkit';

export interface MaxPullState {
  percentPull: number;
  outersUsed: number;
}

const initialState: MaxPullState = {
  percentPull: 0,
  outersUsed: 0,
};

const maxPullSlice = createSlice({
  name: 'maxPull',
  initialState,
  reducers: {
    changePercetPull(state, action: { payload: number }) {
      state.percentPull = action.payload;
    },
    changeOutersUsed(state, action: { payload: number }) {
      state.outersUsed = action.payload;
    },
  },
});

export const { changePercetPull, changeOutersUsed } = maxPullSlice.actions;
export const maxPullReducer = maxPullSlice.reducer;
