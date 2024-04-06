import { useState } from 'react';
import {
  CableSelector,
  CableManualEntrance,
  CurrentCableSpecs,
  InputData,
  NavHeader,
  TableRow,
} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { changeDepth, StoreState } from '../store';
import { useStretchCalc } from '../logics/useStretchCalc';
import { LargeScreenWrapper } from '../components/LargeScreenWrapper';

export const Stretch = () => {
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
    <LargeScreenWrapper>
      <NavHeader>Cable Stretch Calculator</NavHeader>
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
        onChange={(e) => setTension(+e.target.value)}
      >
        Current Tension:
      </InputData>
      <InputData
        onChange={(e) => dispatch(changeDepth(+e.target.value))}
        typeId={'depth'}
        value={depth}
        unit={unitSystem.depthUnits}
      >
        Depth:
      </InputData>
      <table className="table" aria-label="cable stretch table group">
        <tbody>
          <TableRow data={stretch} units={unitSystem.depthUnits}>
            TOTAL CABLE STRETCH
          </TableRow>
        </tbody>
      </table>
    </LargeScreenWrapper>
  );
};
