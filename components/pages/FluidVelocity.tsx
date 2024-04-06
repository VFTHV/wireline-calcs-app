import { useState } from 'react';
import { NavHeader, InputData, PipeSelector, TableRow } from '../components';
import { casingData } from '../database/casingsTubings';
import { useFluidVelocityCalc } from '../logics/useFluidVelocityCalc';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import { LargeScreenWrapper } from '../components/LargeScreenWrapper';

const FluidVelocity = () => {
  const { casing } = useSelector((state: StoreState) => state.cbl);
  const { unitSystem } = useSelector((state: StoreState) => state);
  const [pumpRate, setPumpRate] = useState<number>(0);

  const fluidVelocity = useFluidVelocityCalc(pumpRate, casing?.id, unitSystem);

  return (
    <LargeScreenWrapper>
      <NavHeader>Fluid Velocity</NavHeader>
      <PipeSelector pipeData={casingData} typeId="casing" />
      <InputData
        typeId="pumpRate"
        onChange={(e) => setPumpRate(Number(e.target.value))}
        value={pumpRate}
        unit={unitSystem.pumpRateUnits}
      >
        Pumping rate
      </InputData>
      <table className="table" aria-label="fluid velocity table group">
        <tbody>
          <TableRow data={fluidVelocity} units={unitSystem.velocityUnits}>
            Fluid Velocity
          </TableRow>
        </tbody>
      </table>
    </LargeScreenWrapper>
  );
};

export default FluidVelocity;
