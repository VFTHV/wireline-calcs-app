import { configureStore } from '@reduxjs/toolkit';
import { WeakPointState, weakPointReducer } from './slices/weakPointSlice';
// import { WeightBarState, weightBarReducer } from './slices/weightBarSlice';
// import { UnitSystemState, unitSystemReducer } from './slices/unitSystemSlice';
// import { MaxPullState, maxPullReducer } from './slices/maxPullSlice';
// import { CblState, cblReducer } from './slices/cblSlice';

const store = configureStore<StoreState>({
  reducer: {
    weakPoint: weakPointReducer,
    // weightBar: weightBarReducer,
    // unitSystem: unitSystemReducer,
    // maxPull: maxPullReducer,
    // cbl: cblReducer,
  },
});

export { store };
export * from './slices/weakPointSlice';
// export * from './slices/weightBarSlice';
// export * from './slices/unitSystemSlice';
// export * from './slices/maxPullSlice';
// export * from './slices/cblSlice';

export interface StoreState {
  weakPoint: WeakPointState;
  // weightBar: WeightBarState;
  // unitSystem: UnitSystemState;
  // maxPull: MaxPullState;
  // cbl: CblState;
}
