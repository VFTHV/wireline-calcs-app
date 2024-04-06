import { UnitSystemState } from '../store';
import { useConvertUnits } from './useConvertUnits';

const { revertToEnglish } = useConvertUnits();

export const useWeightBarCalc = (
  diameter: number,
  pressure: number,
  toolWeight: number,
  percentOverBalance: number,
  units: UnitSystemState
) => {
  // converting inputs to English
  const convPressure = revertToEnglish(pressure, units.pressureUnits);
  const convDiameter = revertToEnglish(diameter, units.diameterUnits);

  const balanceWeight = Math.round(
    (convPressure * Math.PI * convDiameter ** 2) / 4
  );

  const multiplier = 1 + percentOverBalance / 100;
  const finalWeight = Math.round(balanceWeight * multiplier);

  const sinkerBarWeight = Math.round(finalWeight - toolWeight);

  const calculated = {
    balanceWeight,
    finalWeight,
    sinkerBarWeight,
  };

  return calculated;
};
