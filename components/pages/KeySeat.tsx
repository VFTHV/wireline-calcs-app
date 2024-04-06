import { useState } from 'react';
import {
  NavHeader,
  CableSelector,
  CableManualEntrance,
  CurrentCableSpecs,
  InputData,
  TableRow,
} from '../components';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import { useKeySeatCalc } from '../logics/useKeySeatCalc';
import { LargeScreenWrapper } from '../components/LargeScreenWrapper';

export const KeySeat = () => {
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
    <LargeScreenWrapper>
      <NavHeader>Cable Stuck Depth {`(Keyseat)`}</NavHeader>
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
        onChange={(e) => setDiffTen(+e.target.value)}
      >
        Differential Tension:
      </InputData>
      <InputData
        typeId="depth"
        unit={unitSystem.depthUnits}
        value={diffStretch}
        onChange={(e) => setDiffStretch(+e.target.value)}
      >
        Differential Stretch:
      </InputData>
      <table className="table" aria-label="keyseat cable stuck table group">
        <tbody>
          <TableRow data={stuckDepth} units={unitSystem.depthUnits}>
            CABLE STUCK DEPTH
          </TableRow>
        </tbody>
      </table>
    </LargeScreenWrapper>
  );
};
