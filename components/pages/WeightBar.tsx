import {
  NavHeader,
  InputData,
  TableRow,
  WeightBarSelector,
} from '../components';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeDiameter,
  changePressure,
  changeWeight,
  changePercentOverBalance,
  StoreState,
} from '../store';
import { useWeightBarCalc } from '../logics/useWeighBarCalc';
import { LargeScreenWrapper } from '../components/LargeScreenWrapper';

export const WeightBar = () => {
  const dispatch = useDispatch();
  const { diameter, wellPressure, weight, percentOverBalance } = useSelector(
    (state: StoreState) => state.weightBar
  );
  const unitSystem = useSelector((state: StoreState) => state.unitSystem);

  const { balanceWeight, finalWeight, sinkerBarWeight } = useWeightBarCalc(
    diameter,
    wellPressure,
    weight,
    percentOverBalance,
    unitSystem
  );

  return (
    <LargeScreenWrapper>
      <NavHeader>Weight Bar</NavHeader>
      <InputData
        onChange={(e) => dispatch(changeDiameter(e.target.value))}
        typeId={'diameter'}
        value={diameter}
        unit={unitSystem.diameterUnits}
      >
        Cable Diameter:
      </InputData>
      <InputData
        onChange={(e) => dispatch(changePressure(e.target.value))}
        typeId={'pressure'}
        value={wellPressure}
        unit={unitSystem.pressureUnits}
      >
        Well Pressure:
      </InputData>
      <InputData
        onChange={(e) => dispatch(changeWeight(e.target.value))}
        typeId={'toolWeight'}
        value={weight}
        unit={unitSystem.weightUnits}
      >
        Tool Weight:
      </InputData>
      <InputData
        onChange={(e) => dispatch(changePercentOverBalance(e.target.value))}
        typeId={'overBalance'}
        value={percentOverBalance}
        unit={'%'}
      >
        Percent over Balance:
      </InputData>
      <table className="table" aria-label="weight bar table group">
        <tbody>
          <TableRow data={balanceWeight} units={unitSystem.weightUnits}>
            BALANCE WEIGHT
          </TableRow>
          <TableRow data={finalWeight} units={unitSystem.weightUnits}>
            FINAL WEIGHT
          </TableRow>
          <TableRow data={sinkerBarWeight} units={unitSystem.weightUnits}>
            SINKER BAR WEIGHT
          </TableRow>
        </tbody>
      </table>
      <WeightBarSelector />
    </LargeScreenWrapper>
  );
};
