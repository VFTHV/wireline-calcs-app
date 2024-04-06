import { useState } from 'react';
import {
  CableSelector,
  CurrentCableSpecs,
  InputData,
  NavHeader,
  TableRow,
} from '../components';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import { useTempLengthCalc } from '../logics/useTempLengthCalc';
import { LargeScreenWrapper } from '../components/LargeScreenWrapper';

export const TempCorrLength = () => {
  const [temp, setTemp] = useState(0);
  const [resistance, setResistance] = useState(0);
  const { tempUnits, resistanceUnits } = useSelector(
    (state: StoreState) => state.unitSystem
  );

  const { currentCable } = useSelector((state: StoreState) => state.weakPoint);
  const { unitSystem } = useSelector((state: StoreState) => state);

  const { length } = useTempLengthCalc(
    resistance,
    currentCable,
    temp,
    unitSystem
  );

  return (
    <LargeScreenWrapper>
      <NavHeader>Temp. Corrected Length</NavHeader>
      <InputData
        value={temp}
        onChange={(e) => setTemp(+e.target.value)}
        typeId="temperature"
        unit={tempUnits}
      >
        Ambient Temperature
      </InputData>
      <InputData
        value={resistance}
        onChange={(e) => setResistance(+e.target.value)}
        typeId="resistance"
        unit={resistanceUnits}
      >
        Measured Cable Resistance
      </InputData>
      <CableSelector />
      <CurrentCableSpecs specs={['conductorResistance']} />
      <table
        className="table"
        aria-label="temperature corrected length table group"
      >
        <tbody>
          <TableRow
            data={length === Infinity ? 0 : length}
            units={unitSystem.depthUnits}
          >
            Temperature Corrected Cable Length
          </TableRow>
        </tbody>
      </table>
    </LargeScreenWrapper>
  );
};
