import {
  NavHeader,
  CableSelector,
  CurrentCableSpecs,
  CableManualEntrance,
  InputData,
  TableRow,
  RadioDualInput,
} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import {
  StoreState,
  changeDepth,
  changeEnvironment,
  changePercetPull,
  changeOutersUsed,
} from '../store';
import { useMaxPullCalc } from '../logics/useMaxPullCalc';
import { EnvironmentUnits } from '../store/slices/types';
import { LargeScreenWrapper } from '../components/LargeScreenWrapper';

export const MaxPull = () => {
  const { unitSystem } = useSelector((state: StoreState) => state);
  const { depth, environment, currentCable } = useSelector(
    (state: StoreState) => state.weakPoint
  );
  const { percentPull, outersUsed } = useSelector(
    (state: StoreState) => state.maxPull
  );
  const dispatch = useDispatch();

  const { maxPull, conservativePull } = useMaxPullCalc(
    depth,
    percentPull,
    outersUsed,
    currentCable,
    environment,
    unitSystem
  );

  return (
    <LargeScreenWrapper>
      <NavHeader>Max. Tension at Depth</NavHeader>
      <CableSelector />
      {currentCable.type === 'MANUAL' ? (
        <CableManualEntrance
          specs={['maxTension', 'outerArmorBS', 'weightInAir']}
        />
      ) : (
        <CurrentCableSpecs
          specs={['maxTension', 'outerArmorBS', 'weightInAir']}
        />
      )}

      <RadioDualInput
        values={[EnvironmentUnits.FLUID, EnvironmentUnits.GAS]}
        onChange={(e) => dispatch(changeEnvironment(e.target.value))}
        currentValue={environment}
      />

      <InputData
        onChange={(e) => dispatch(changeDepth(+e.target.value))}
        typeId={'depth'}
        value={depth}
        unit={unitSystem.depthUnits}
      >
        Depth:
      </InputData>
      <InputData
        value={outersUsed}
        unit=""
        onChange={(e) => dispatch(changeOutersUsed(+e.target.value))}
        typeId={'outersUsed'}
      >
        Number of Outer Armors Used
      </InputData>
      <InputData
        value={percentPull}
        unit="%"
        onChange={(e) => dispatch(changePercetPull(+e.target.value))}
        typeId={'overBalance'}
      >
        Percent of Weak Point Breaking Strength
      </InputData>
      <table className="table" aria-label="maximum cable pull table group">
        <tbody>
          <TableRow
            data={conservativePull}
            units={unitSystem.weightUnits}
            dataMaxTolerance={currentCable.maxTension}
          >
            {percentPull && depth
              ? `Conservative ${percentPull} % WP pull @ ${depth} ${unitSystem.depthUnits}`
              : 'Conservative pull'}
          </TableRow>
          <TableRow
            data={maxPull}
            units={unitSystem.weightUnits}
            dataMaxTolerance={currentCable.maxTension}
          >
            {percentPull && depth
              ? `Max ${percentPull} % WP pull @ ${depth} ${unitSystem.depthUnits}`
              : 'Max pull'}
          </TableRow>
        </tbody>
      </table>
    </LargeScreenWrapper>
  );
};
