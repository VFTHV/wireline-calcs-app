import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { InputData } from './InputData';
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

export const CableManualEntrance = ({ specs }: CableManualEntranceProps) => {
  const dispatch = useDispatch();
  const { outerArmorBS, innerArmorBS, weightInAir, maxTension, stretchCoeff } =
    useSelector((state: StoreState) => state.weakPoint.currentCable);
  const unitSystem = useSelector((state: StoreState) => state.unitSystem);

  const content: { [key in CableSpecsKey]: ReactNode } = {
    type: <>TBD for developer</>,
    diameter: <>TBD for developer</>,
    stretchCoeff: (
      <InputData
        onChange={(value) => dispatch(changeStretchCoef(+value))}
        typeId={'stretchCoef'}
        value={stretchCoeff.toString()}
        unit={unitSystem.depthUnits}
      >
        Cable Stretch Coef. / (1Kft*1Klbs)
      </InputData>
    ),
    breakingStrength: <>TBD for developer</>,
    maxTension: (
      <InputData
        onChange={(value) => dispatch(changeMaxTension(+value))}
        typeId={'maxTension'}
        value={maxTension.toString()}
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
        onChange={(value) => dispatch(changeInnerBS(+value))}
        typeId={'outerBS'}
        value={innerArmorBS.toString()}
        unit={unitSystem.weightUnits}
      >
        INNER ARMOR BREAKING STRENGTH
      </InputData>
    ),
    outerArmorBS: (
      <InputData
        onChange={(value) => dispatch(changeOuterBS(+value))}
        typeId={'outerBS'}
        value={outerArmorBS.toString()}
        unit={unitSystem.weightUnits}
      >
        OUTER ARMOR BREAKING STRENGTH
      </InputData>
    ),
    weightInAir: (
      <InputData
        onChange={(value) => dispatch(changeWeightInAir(+value))}
        typeId={'weightInAir'}
        value={weightInAir.toString()}
        unit={unitSystem.weightUnits}
      >
        CABLE WEIGHT IN AIR
      </InputData>
    ),
  };

  return (
    <View>
      {specs.map((spec) => {
        return <Text key={spec}>{content[spec]}</Text>;
      })}
    </View>
  );
};
