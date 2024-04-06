import { useConvertUnits } from './useConvertUnits';
import { UnitSystemState } from '../store';

const { revertToMetric, convertToEnglish } = useConvertUnits();

export const useFluidVelocityCalc = (
  pumpRate: number,
  csgId: number | undefined,
  unitSystem: UnitSystemState
): number => {
  if (!pumpRate || !csgId) return 0;

  // CHANGING EVERYTHING TO METRIC FOR EASE OF CALCULATION :)))
  const convPumpRate = revertToMetric(pumpRate, unitSystem.pumpRateUnits);
  // DIAMETER IN INCHES MANUALLY BECAUSE casingData is by default in INCHES
  // AND DOESN'T DEPEND ON SET UNITS
  const convCsgId = revertToMetric(csgId, 'in');

  const pipeXSectionArea = (Math.PI * (convCsgId * 0.001) ** 2) / 4;
  const velocity = convPumpRate / pipeXSectionArea;

  // MANUALLY CHANGING PUMP RATE UNITS TO CONVERT BACK TO ENGLISH

  const metricPumpRate = 'ft/min';

  const convVelocity = convertToEnglish(velocity, metricPumpRate);

  return Math.round(convVelocity);
};
