import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { FluidSelector } from '../components/FluidSelector';
import { InputData } from '../components/InputData';
import { PipeSelector } from '../components/PipeSelector';
import PipeSpecsDisplay from '../components/PipeSpecsDisplay';
import TableRow from '../components/TableRow';
import { casingData } from '../database/casingsTubings';
import { useCblCalcs } from '../logics/useCblCalcs';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import { useConvertUnits } from '../logics/useConvertUnits';
import { styleVariables as st } from '../styles/global';

export default function CBL() {
  const [toolOd, setToolOd] = useState<number>(0);
  const { casing, fluid } = useSelector((state: StoreState) => state.cbl);
  const unitSystem = useSelector((state: StoreState) => state.unitSystem);
  const { microSecUnits, diameterUnits } = unitSystem;

  const ppt = useCblCalcs(casing, toolOd, unitSystem, fluid);
  const { revertToEnglish } = useConvertUnits();

  const renderPPT = () => {
    if (!casing || !toolOd) return;

    const convToolOd = revertToEnglish(toolOd, diameterUnits);

    if (casing.id < convToolOd * 1.43) {
      return <Text style={errHeader}>TOOL SIZE TOO LARGE FOR CASING ID</Text>;
    }

    return (
      <View>
        <TableRow data={ppt?.ppt3ft} units={microSecUnits}>
          3ft Predicted Pipe Time
        </TableRow>

        <TableRow data={ppt?.ppt5ft} units={microSecUnits}>
          5ft Predicted Pipe Time
        </TableRow>
      </View>
    );
  };

  return (
    <View>
      <PipeSelector pipeData={casingData} typeId="casing" />

      <InputData
        onChange={(value) => setToolOd(+value)}
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
    </View>
  );
}

const { errHeader } = StyleSheet.create({
  errHeader: {
    margin: st.spacingDefault,
    color: st.secondaryColor,
    alignSelf: 'center',
    fontSize: st.fontSizePri,
    fontFamily: 'Outfit-Bold',
  },
});
