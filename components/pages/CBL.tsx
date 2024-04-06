import { useState } from 'react';
import {
  FluidSelector,
  InputData,
  NavHeader,
  PipeSelector,
  PipeSpecsDisplay,
  TableRow,
} from '../components';
import { casingData } from '../database/casingsTubings';
import { useCblCalcs } from '../logics/useCblCalcs';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import { useConvertUnits } from '../logics/useConvertUnits';
import { LargeScreenWrapper } from '../components/LargeScreenWrapper';

export const CBL = () => {
  const [toolOd, setToolOd] = useState<number>(0);
  const { casing, fluid } = useSelector((state: StoreState) => state.cbl);
  const { unitSystem } = useSelector((state: StoreState) => state);
  const { microSecUnits, diameterUnits } = unitSystem;

  const ppt = useCblCalcs(casing, toolOd, unitSystem, fluid);
  const { revertToEnglish } = useConvertUnits();

  const renderPPT = () => {
    if (!casing || !toolOd) return;

    const convToolOd = revertToEnglish(toolOd, diameterUnits);

    if (casing.id < convToolOd * 1.43) {
      return <h3 className="err-header">TOOL SIZE TOO LARGE FOR CASING ID</h3>;
    }

    return (
      <table className="table" aria-label="Cement Bond Log table group">
        <tbody aria-label="3ft predicted pipe time table row">
          <TableRow data={ppt?.ppt3ft} units={microSecUnits}>
            3ft Predicted Pipe Time
          </TableRow>
        </tbody>

        <tbody aria-label="5ft predicted pipe time table row">
          <TableRow data={ppt?.ppt5ft} units={microSecUnits}>
            5ft Predicted Pipe Time
          </TableRow>
        </tbody>
      </table>
    );
  };

  return (
    <LargeScreenWrapper>
      <NavHeader>Cement Bond Log Calcs</NavHeader>
      <PipeSelector pipeData={casingData} typeId="casing" />

      <InputData
        onChange={(e) => setToolOd(+e.target.value)}
        value={toolOd}
        typeId="toolOd"
        unit={diameterUnits}
        placeholder='E.g. 1-11/16" is 1.69" or 43 mm'
      >
        Enter CBL tool OD
      </InputData>
      {/* add fluid  selector */}
      <FluidSelector />
      <PipeSpecsDisplay typeId="casing" specs={['id']} pipeThck />
      {renderPPT()}
    </LargeScreenWrapper>
  );
};
