import React from 'react';
import { ScrollView } from 'react-native';
import CableSelector from '../components/CableSelector';
import { CurrentCableSpecs } from '../components/CurrentCableSpecs';
import { CableManualEntrance } from '../components/CableManualEntrance';
import { InputData } from '../components/InputData';
import TableRow from '../components/TableRow';
import { RadioDualInput } from '../components/RadioDualInput';
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

export default function TensionAtDepth() {
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
    <ScrollView>
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
        onPress={(value) => dispatch(changeEnvironment(value))}
        currentValue={environment}
      />

      <InputData
        onChange={(value) => dispatch(changeDepth(+value))}
        typeId={'depth'}
        value={depth}
        unit={unitSystem.depthUnits}
      >
        Depth:
      </InputData>
      <InputData
        value={outersUsed}
        unit=""
        onChange={(value) => dispatch(changeOutersUsed(+value))}
        typeId={'outersUsed'}
      >
        Number of Outer Armors Used
      </InputData>
      <InputData
        value={percentPull}
        unit="%"
        onChange={(value) => dispatch(changePercetPull(+value))}
        typeId={'overBalance'}
      >
        Percent of Weak Point Breaking Strength
      </InputData>

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
    </ScrollView>
  );
}
