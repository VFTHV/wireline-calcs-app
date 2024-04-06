import { CableSpecs } from '../database/cables';
import { EnvironmentType } from '../store/slices/types';
import { UnitSystemState } from '../store';
import { useConvertUnits } from './useConvertUnits';

const { revertToEnglish } = useConvertUnits();

export const useWeakPointCalc = (
  currentCable: CableSpecs,
  depth: number,
  environment: EnvironmentType,
  unitSystem: UnitSystemState,
  toolWeight?: number
) => {
  const convDepth = revertToEnglish(depth, unitSystem.depthUnits);
  const envCoeff = environment === 'fluid' ? 0.83 : 1;

  const cableWeight = Math.round(
    envCoeff * currentCable.weightInAir * (convDepth / 1000)
  );

  let maxWPstrength = 0;
  if (cableWeight) {
    maxWPstrength = Math.round(currentCable.maxTension - cableWeight);
  }

  const outersRehead = +(maxWPstrength / currentCable.outerArmorBS).toFixed(1);

  let toolWeightVsWeakpt = 0;
  if (toolWeight && maxWPstrength) {
    const convToolWeight = revertToEnglish(toolWeight, unitSystem.weightUnits);
    toolWeightVsWeakpt = Math.round((convToolWeight / maxWPstrength) * 100);
  }

  const calculated = {
    cableWeight,
    maxWPstrength,
    outersRehead,
    toolWeightVsWeakpt,
  };
  return calculated;
};
