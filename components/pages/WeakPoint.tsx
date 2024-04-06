import {
  NavHeader,
  TableRow,
  InputData,
  RadioDualInput,
  CableSelector,
  CableManualEntrance,
  CurrentCableSpecs,
} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeToolWeight,
  changeDepth,
  changeEnvironment,
} from '../store/slices/weakPointSlice';
import { StoreState } from '../store';
import { useWeakPointCalc } from '../logics/useWeakPointCalc';
import { EnvironmentUnits } from '../store/slices/types';
import { LargeScreenWrapper } from '../components/LargeScreenWrapper';

export const WeakPoint = () => {
  const dispatch = useDispatch();
  const { currentCable, toolWeight, depth, environment } = useSelector(
    (state: StoreState) => state.weakPoint
  );
  const unitSystem = useSelector((state: StoreState) => state.unitSystem);

  const { cableWeight, maxWPstrength, outersRehead, toolWeightVsWeakpt } =
    useWeakPointCalc(currentCable, depth, environment, unitSystem, toolWeight);

  return (
    <LargeScreenWrapper>
      <NavHeader>Weak Point</NavHeader>
      <CableSelector />
      {currentCable.type === 'MANUAL' ? (
        <CableManualEntrance
          specs={['outerArmorBS', 'weightInAir', 'maxTension']}
        />
      ) : (
        <CurrentCableSpecs
          specs={[
            'breakingStrength',
            'outerArmorBS',
            'weightInAir',
            'maxTension',
          ]}
        />
      )}
      <RadioDualInput
        values={[EnvironmentUnits.FLUID, EnvironmentUnits.GAS]}
        onChange={(e) => dispatch(changeEnvironment(e.target.value))}
        currentValue={environment}
      />
      <InputData
        onChange={(e) => dispatch(changeToolWeight(+e.target.value))}
        typeId={'toolWeight'}
        value={toolWeight}
        unit={unitSystem.weightUnits}
      >
        Toolstring Weight:
      </InputData>
      <InputData
        onChange={(e) => dispatch(changeDepth(+e.target.value))}
        typeId={'depth'}
        value={depth}
        unit={unitSystem.depthUnits}
      >
        Depth:
      </InputData>
      <table className="table" aria-label="weakpoint table group">
        <tbody>
          <TableRow data={cableWeight} units={unitSystem.weightUnits}>
            TOTAL CABLE WEIGHT
          </TableRow>
          <TableRow data={maxWPstrength} units={unitSystem.weightUnits}>
            MAX WEAKPOINT STRENGTH
          </TableRow>
          <TableRow data={outersRehead} units="">
            NUMBER OF OUTER WIRES
          </TableRow>
          <TableRow data={toolWeightVsWeakpt} units="%">
            TOOL WEIGHT % OF WEAKPOINT
          </TableRow>
        </tbody>
      </table>
    </LargeScreenWrapper>
  );
};
