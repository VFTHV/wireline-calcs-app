import { CableSpecs } from '../database/cables';
import { UnitSystemState } from '../store';
import { useConvertUnits } from './useConvertUnits';

const { revertToEnglish } = useConvertUnits();

export const useTempLengthCalc = (
  measResistance: number,
  currentCable: CableSpecs,
  temperature: number,
  unitSystem: UnitSystemState
) => {
  const { conductorResistance: Rnom, tempCorrResist: deltaR } = currentCable;
  const convTemp = revertToEnglish(temperature, unitSystem.tempUnits);
  const length = Math.round(
    (measResistance / (Rnom + deltaR * (convTemp - 68))) * 1000
  );

  return { length };
};

//  Getting the temperature correcting coefficient
// const getDeltaR = (
//   R: number,
//   Tcurr: number,
//   Rnom: number,
//   length: number
// ): number => {
//   const deltaR = ((1000 * R) / length - Rnom) / (Tcurr - 68);
//   return deltaR;
// };

// getting length
// const getLength = (R: number, Tcurr: number, Rnom: number): number => {
//   const length = (R / (Rnom + 0.005240174942186858 * (Tcurr - 68))) * 1000;
//   return length;
// };
