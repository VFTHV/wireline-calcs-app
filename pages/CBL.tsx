import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
// import {
//   FluidSelector,
//   InputData,
//   NavHeader,
//   PipeSelector,
//   PipeSpecsDisplay,
//   TableRow,
// } from '../components';
import { FluidSelector } from '../components/FluidSelector';
// import { InputData } from '../components/InputData';
// import
import { casingData } from '../database/casingsTubings';
import { useCblCalcs } from '../logics/useCblCalcs';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import { useConvertUnits } from '../logics/useConvertUnits';
import { PipeSelector } from '../components/PipeSelector';

export default function CBL() {
  return (
    <View>
      <PipeSelector pipeData={casingData} typeId="casing" />
      <FluidSelector />
    </View>
  );
}

const styles = StyleSheet.create({});
