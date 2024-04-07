import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { changeCasing, changeTubing } from '../store';
import { PipeSpecs } from '../database/casingsTubings';
import { Picker } from '@react-native-picker/picker';
import { styleVariables as st } from '../styles/global';

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
        >
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
        >
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

const { text, inputGroup, pickerView } = StyleSheet.create({
  inputGroup: {
    margin: st.spacingDefault,
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    color: st.secondaryColor,
    fontSize: st.fontSizePri,
    fontFamily: 'Outfit-Light',
  },
  pickerView: {
    height: 32,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
