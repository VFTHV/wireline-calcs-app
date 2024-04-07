import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { casingData, tubingData } from '../database/casingsTubings';

import { PipeSelector } from '../components/PipeSelector';
import PipeSpecsDisplay from '../components/PipeSpecsDisplay';

export default function CsgSpecs() {
  return (
    <View>
      <PipeSelector pipeData={casingData} typeId="casing" />
      <PipeSpecsDisplay
        typeId="casing"
        specs={['id', 'drift', 'capacity']}
        pipeThck
      />
      <PipeSelector pipeData={tubingData} typeId="tubing" />
      <PipeSpecsDisplay
        typeId="tubing"
        specs={['id', 'drift', 'capacity']}
        pipeThck
      />
    </View>
  );
}
