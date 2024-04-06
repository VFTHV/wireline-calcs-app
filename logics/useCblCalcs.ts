import { PipeSpecs } from '../database/casingsTubings';
import { FluidSpecs } from '../database/cbl';
import { UnitSystemState } from '../store';
import { useConvertUnits } from './useConvertUnits';

const { revertToEnglish } = useConvertUnits();

export const useCblCalcs = (
  csg: PipeSpecs | undefined,
  toolOd: number,
  unitSystem: UnitSystemState,
  fluid: FluidSpecs
): { ppt3ft: number; ppt5ft: number } | undefined => {
  if (!csg || !toolOd) return;

  const convToolOd = revertToEnglish(toolOd, unitSystem.diameterUnits);

  const dTsilicone = 226;
  // const dTfrWater = 205.9;
  const dTcsg = 57;
  const toolId = 0.53 * convToolOd;
  const ttTool: number = (dTsilicone * ((convToolOd - toolId) / 2)) / 12;

  const normalDistance = ((csg.id - convToolOd) * 0.5) / 12;
  // FLUID calcs
  const asin = Math.asin(dTcsg / fluid.slowness);
  const angle = Math.atan(asin);
  // const degrees = (angle * 180) / Math.PI;
  const fluidPath = normalDistance / Math.cos(angle);
  const ttFluid = fluidPath * fluid.slowness;

  // CASING calcs
  const csgReduction = normalDistance * Math.tan(angle);

  const csg3ftPath = 3 - csgReduction * 2;
  const ttCsg3ft = dTcsg * csg3ftPath;
  const ppt3ft = Math.round(2 * ttTool + ttCsg3ft + 2 * ttFluid);

  const csg5ftPath = 5 - csgReduction * 2;
  const ttCsg5ft = dTcsg * csg5ftPath;
  const ppt5ft = Math.round(2 * ttTool + ttCsg5ft + 2 * ttFluid);

  return { ppt3ft, ppt5ft };
};
