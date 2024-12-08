import { View, Text } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { changeCasing, changeTubing } from '../store';
import { PipeSpecs } from '../database/casingsTubings';
import { Picker } from '@react-native-picker/picker';
import { pickerStyles } from '../styles/global';

interface PipeSelectorProps {
  pipeData: PipeSpecs[];
  typeId: 'casing' | 'tubing';
}

export const PipeSelector = ({ pipeData, typeId }: PipeSelectorProps) => {
  const ODs = [...new Set(pipeData.map((pipe) => pipe.nom))];
  const [nom, setNom] = useState<string>('');

  const pipeWeights = pipeData
    .filter((pipe) => pipe.nom === nom)
    .map((pipe) => pipe.weight);

  const [weight, setWeight] = useState<number>(pipeWeights[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    const selectedPipe = pipeData.find(
      (csg) => csg.nom === nom && csg.weight === weight
    );
    dispatch(action(selectedPipe));
  }, [nom, weight]);

  const action: ActionCreatorWithPayload<PipeSpecs | undefined> =
    typeId === 'casing' ? changeCasing : changeTubing;

  const pipeWord = typeId.charAt(0).toUpperCase() + typeId.slice(1);

  return (
    <View style={inputGroup}>
      <Text style={text}>{pipeWord} OD:</Text>
      <View style={pickerView}>
        <Picker
          selectedValue={nom}
          onValueChange={(value: string) => setNom(value)}
          mode="dropdown"
        >
          <Picker.Item
            value={`Choose ${pipeWord} OD`}
            label={`Choose ${pipeWord} OD`}
          />
          {ODs.map((od) => {
            return <Picker.Item key={od} value={od} label={od} />;
          })}
        </Picker>
      </View>

      <Text style={text}>{pipeWord} Weight:</Text>
      <View style={pickerView}>
        <Picker
          selectedValue={weight}
          onValueChange={(value: number) => setWeight(+value)}
          mode="dropdown"
        >
          <Picker.Item value={null} label={`Choose ${pipeWord} Weight PPF`} />
          {pipeWeights.map((weight) => {
            return (
              <Picker.Item key={weight} value={weight} label={String(weight)} />
            );
          })}
        </Picker>
      </View>
    </View>
  );
};

const { text, inputGroup, pickerView } = pickerStyles;
