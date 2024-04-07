import React from 'react';
import { View } from 'react-native';
import { useState } from 'react';
import CableSelector from '../components/CableSelector';
import { CableManualEntrance } from '../components/CableManualEntrance';
import { CurrentCableSpecs } from '../components/CurrentCableSpecs';
import { InputData } from '../components/InputData';
import TableRow from '../components/TableRow';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import { useKeySeatCalc } from '../logics/useKeySeatCalc';

export default function KeySeat() {
  const [diffStretch, setDiffStretch] = useState(0);
  const [diffTen, setDiffTen] = useState(0);
  const { stretchCoeff, type } = useSelector(
    (state: StoreState) => state.weakPoint.currentCable
  );
  const { unitSystem } = useSelector((state: StoreState) => state);

  const stuckDepth = useKeySeatCalc(
    diffStretch,
    diffTen,
    stretchCoeff,
    unitSystem
  );

  return (
    <View>
      <CableSelector />
      {type === 'MANUAL' ? (
        <CableManualEntrance specs={['stretchCoeff']} />
      ) : (
        <CurrentCableSpecs specs={['stretchCoeff']} />
      )}
      <InputData
        typeId="maxTension"
        unit={unitSystem.weightUnits}
        value={diffTen}
        onChange={(value) => setDiffTen(+value)}
      >
        Differential Tension:
      </InputData>
      <InputData
        typeId="depth"
        unit={unitSystem.depthUnits}
        value={diffStretch}
        onChange={(value) => setDiffStretch(+value)}
      >
        Differential Stretch:
      </InputData>
      <TableRow data={stuckDepth} units={unitSystem.depthUnits}>
        CABLE STUCK DEPTH
      </TableRow>
    </View>
  );
}
