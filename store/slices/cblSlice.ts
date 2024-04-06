import { createSlice } from '@reduxjs/toolkit';
import { PipeSpecs, casingData } from '../../database/casingsTubings';
import { fluidsData, FluidSpecs } from '../../database/cbl';

export interface CblState {
  casing: PipeSpecs | undefined;
  tubing: PipeSpecs | undefined;
  fluid: FluidSpecs;
}

const initialState: CblState = {
  casing: undefined,
  tubing: casingData[0], // change this to tubing data array
  fluid: fluidsData[0],
};

const cblSlice = createSlice({
  name: 'cbl',
  initialState,
  reducers: {
    changeCasing(state, action: { payload: PipeSpecs | undefined }) {
      state.casing = action.payload;
    },
    changeTubing(state, action: { payload: PipeSpecs | undefined }) {
      state.tubing = action.payload;
    },
    changeFluid(state, action) {
      const selected = fluidsData.find(
        (fluid: FluidSpecs) => fluid.type === action.payload
      );
      if (!selected) return;
      state.fluid = selected;
    },
  },
});

export const { changeCasing, changeTubing, changeFluid } = cblSlice.actions;
export const cblReducer = cblSlice.reducer;
