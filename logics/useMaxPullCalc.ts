import { CableSpecs } from '../database/cables';
import { UnitSystemState } from '../store';
import { EnvironmentType } from '../store/slices/types';
import { useConvertUnits } from './useConvertUnits';

const { revertToEnglish } = useConvertUnits();

export const useMaxPullCalc = (
  depth: number,
  percentPull: number,
  outersUsed: number,

  currentCable: CableSpecs,
  environment: EnvironmentType,
  units: UnitSystemState
): { maxPull: number; conservativePull: number } => {
  if (!outersUsed || !percentPull) {
    return { maxPull: 0, conservativePull: 0 };
  }
  const envCoeff = environment === 'fluid' ? 0.83 : 1;
  const convDepth = revertToEnglish(depth, units.depthUnits);

  const { weightInAir: weight, outerArmorBS: outer } = currentCable;

  const cableWeight = (weight * convDepth * envCoeff) / 1000;
  const maxAtWeakPoint = outersUsed * outer * (percentPull / 100);
  const conservativeAtWakPoint = maxAtWeakPoint * 0.8;
  const maxPull = Math.floor(cableWeight + maxAtWeakPoint);
  const conservativePull = Math.floor(cableWeight + conservativeAtWakPoint);
  // add danger message if more than currentCable.maxtension

  return { maxPull, conservativePull };
};
