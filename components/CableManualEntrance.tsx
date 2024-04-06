import { FC, ReactNode, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputData } from '.';
import {
  changeOuterBS,
  changeWeightInAir,
  changeMaxTension,
  StoreState,
  changeStretchCoef,
  changeInnerBS,
} from '../store';
import { CableSpecsKey } from '../database/cables';

interface CableManualEntranceProps {
  specs: CableSpecsKey[];
}

export const CableManualEntrance: FC<CableManualEntranceProps> = ({
  specs,
}) => {
  const dispatch = useDispatch();
  const { outerArmorBS, innerArmorBS, weightInAir, maxTension, stretchCoeff } =
    useSelector((state: StoreState) => state.weakPoint.currentCable);
  const unitSystem = useSelector((state: StoreState) => state.unitSystem);

  const content: { [key in CableSpecsKey]: ReactNode } = {
    type: <>TBD for developer</>,
    diameter: <>TBD for developer</>,
    stretchCoeff: (
      <InputData
        onChange={(e) => dispatch(changeStretchCoef(+e.target.value))}
        typeId={'stretchCoef'}
        value={stretchCoeff}
        unit={unitSystem.depthUnits}
      >
        Cable Stretch Coef. / (1Kft*1Klbs)
      </InputData>
    ),
    breakingStrength: <>TBD for developer</>,
    maxTension: (
      <InputData
        onChange={(e) => dispatch(changeMaxTension(+e.target.value))}
        typeId={'maxTension'}
        value={maxTension}
        unit={unitSystem.weightUnits}
      >
        MAX. RECOMMENDED TENSION
      </InputData>
    ),
    conductorResistance: <>TBD for developer</>,
    inners: <>TBD for developer</>,
    outers: <>TBD for developer</>,
    tempCorrResist: <>TBD for developer</>,
    innerArmorBS: (
      <InputData
        onChange={(e) => dispatch(changeInnerBS(+e.target.value))}
        typeId={'outerBS'}
        value={innerArmorBS}
        unit={unitSystem.weightUnits}
      >
        INNER ARMOR BREAKING STRENGTH
      </InputData>
    ),
    outerArmorBS: (
      <InputData
        onChange={(e) => dispatch(changeOuterBS(+e.target.value))}
        typeId={'outerBS'}
        value={outerArmorBS}
        unit={unitSystem.weightUnits}
      >
        OUTER ARMOR BREAKING STRENGTH
      </InputData>
    ),
    weightInAir: (
      <InputData
        onChange={(e) => dispatch(changeWeightInAir(+e.target.value))}
        typeId={'weightInAir'}
        value={weightInAir}
        unit={unitSystem.weightUnits}
      >
        CABLE WEIGHT IN AIR
      </InputData>
    ),
  };

  return (
    <>
      {specs.map((spec) => {
        return <Fragment key={spec}>{content[spec]}</Fragment>;
      })}
    </>
  );
};
