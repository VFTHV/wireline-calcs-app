import { ScrollView } from 'react-native';
import CableSelector from '../components/CableSelector';
import { CurrentCableSpecs } from '../components/CurrentCableSpecs';
import { CableManualEntrance } from '../components/CableManualEntrance';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../store';
import { RadioDualInput } from '../components/RadioDualInput';
import {
  changeToolWeight,
  changeDepth,
  changeEnvironment,
} from '../store/slices/weakPointSlice';
import { useWeakPointCalc } from '../logics/useWeakPointCalc';
import { EnvironmentUnits } from '../store/slices/types';
import { InputData } from '../components/InputData';
import TableRow from '../components/TableRow';

export default function WeakPoint() {
  const dispatch = useDispatch();
  const { currentCable, toolWeight, depth, environment } = useSelector(
    (state: StoreState) => state.weakPoint
  );
  const unitSystem = useSelector((state: StoreState) => state.unitSystem);

  const { cableWeight, maxWPstrength, outersRehead, toolWeightVsWeakpt } =
    useWeakPointCalc(currentCable, depth, environment, unitSystem, toolWeight);

  return (
    <ScrollView>
      <CableSelector />
      {currentCable.type === 'MANUAL' ? (
        <CableManualEntrance
          specs={['outerArmorBS', 'weightInAir', 'maxTension']}
        />
      ) : (
        <CurrentCableSpecs
          specs={['outerArmorBS', 'weightInAir', 'maxTension']}
        />
      )}
      <RadioDualInput
        values={[EnvironmentUnits.FLUID, EnvironmentUnits.GAS]}
        onPress={(value) => dispatch(changeEnvironment(value))}
        currentValue={environment}
      />
      <InputData
        onChange={(value) => dispatch(changeToolWeight(+value))}
        typeId={'toolWeight'}
        value={toolWeight.toString()}
        unit={unitSystem.weightUnits}
      >
        Toolstring Weight:
      </InputData>
      <InputData
        onChange={(value) => dispatch(changeDepth(+value))}
        typeId={'depth'}
        value={depth.toString()}
        unit={unitSystem.depthUnits}
      >
        Depth:
      </InputData>
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
    </ScrollView>
  );
}
