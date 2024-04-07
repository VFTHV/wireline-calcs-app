import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import CableSelector from '../components/CableSelector';
import { CableManualEntrance } from '../components/CableManualEntrance';
import { CurrentCableSpecs } from '../components/CurrentCableSpecs';
import { InputData } from '../components/InputData';
import TableRow from '../components/TableRow';
import { useSelector, useDispatch } from 'react-redux';
import { changeDepth, StoreState } from '../store';
import { useStretchCalc } from '../logics/useStretchCalc';

export default function Stretch() {
  const [tension, setTension] = useState<number>(0);

  const { currentCable, depth } = useSelector(
    (state: StoreState) => state.weakPoint
  );
  const { unitSystem } = useSelector((state: StoreState) => state);

  const dispatch = useDispatch();
  const stretch = useStretchCalc(
    depth,
    tension,
    currentCable.stretchCoeff,
    unitSystem
  );

  return (
    <View>
      <CableSelector />
      {currentCable.type === 'MANUAL' ? (
        <CableManualEntrance specs={['stretchCoeff']} />
      ) : (
        <CurrentCableSpecs specs={['stretchCoeff']} />
      )}

      <InputData
        typeId={'maxTension'}
        unit={unitSystem.weightUnits}
        value={tension}
        onChange={(value) => setTension(+value)}
      >
        Current Tension:
      </InputData>
      <InputData
        onChange={(value) => dispatch(changeDepth(+value))}
        typeId={'depth'}
        value={depth}
        unit={unitSystem.depthUnits}
      >
        Depth:
      </InputData>
      <TableRow data={stretch} units={unitSystem.depthUnits}>
        TOTAL CABLE STRETCH
      </TableRow>
    </View>
  );
}

const styles = StyleSheet.create({});
