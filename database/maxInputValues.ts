import {
  PressureUnits,
  WeightUnits,
  DiameterUnits,
  DepthUnits,
  CapacityUnits,
  MeasurementType,
  UnitType,
  TempUnits,
  ResistivityUnits,
  ResistanceUnits,
  PumpRateUnits,
  VelocityUnits,
} from '../store/slices/types';

export const maxInputValues: Record<
  MeasurementType,
  Partial<Record<UnitType, number>>
> = {
  depth: { [DepthUnits.FT]: 30000, [DepthUnits.M]: 9144 },
  toolWeight: { [WeightUnits.LBS]: 4000, [WeightUnits.KG]: 1800 },
  weightInAir: { [WeightUnits.LBS]: 250, [WeightUnits.KG]: 113 },
  diameter: { [DiameterUnits.INCH]: 0.6, [DiameterUnits.MM]: 16 },
  pressure: { [PressureUnits.PSI]: 10000, [PressureUnits.ATM]: 680 },
  capacity: { [CapacityUnits.BBL]: 20, [CapacityUnits.M3]: 3.2 },
  overBalance: { '%': 100 },
  outerBS: { [WeightUnits.LBS]: 700, [WeightUnits.KG]: 315 },
  maxTension: { [WeightUnits.LBS]: 15000, [WeightUnits.KG]: 6750 },
  stretchCoef: { [DepthUnits.FT]: 20, [DepthUnits.M]: 6 },
  outersUsed: { '': 25 },
  temperature: { [TempUnits.DEGF]: 500, [TempUnits.DEGC]: 260 },
  resistivity: {
    [ResistivityUnits.OHM_KFT]: 10,
    [ResistivityUnits.OHM_KM]: 30,
  },
  resistance: { [ResistanceUnits.OHM]: 300 },
  toolOd: { [DiameterUnits.INCH]: 7, [DiameterUnits.MM]: 180 },
  pumpRate: { [PumpRateUnits.BBLMIN]: 50, [PumpRateUnits.M3MIN]: 8 },
  velocity: { [VelocityUnits.FTMIN]: 1500, [VelocityUnits.MMIN]: 500 },
};
