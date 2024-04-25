import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { pickerStyles, styleVariables as st } from '../styles/global';
import { Picker } from '@react-native-picker/picker';
import customFetch from '../apis/axios';
import { AxiosError } from 'axios';
import Toast from 'react-native-toast-message';

const issueNames = [
  '',
  'Weak Point Calculator',
  'Sinker Bar Weight Calculator',
  'Cable Stretch Calculator',
  'Max. Tension At Depth',
  'Casing/Tubing Specs',
  'Temp. Corrected Length',
];

export default function Feedback() {
  const [name, setName] = useState('');
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = async () => {
    console.log('submitting');
    try {
      const response = await customFetch.post('api/v1/form', {
        name,
        issue,
        description,
      });
      console.log(response.data);
    } catch (error) {
      if (error.isAxiosError) {
        const axiosError = error as AxiosError;
        console.log('Axios Error:', axiosError.message);
        console.log('Response Data:', axiosError.response?.data);
        console.log('Response Status:', axiosError.response?.status);
        Toast.show({
          type: 'error',
          text1:
            (axiosError.response?.data.msg as string) || 'Problem with form',
        });
      } else {
        // Handle non-Axios errors
        console.log('Non-Axios Error:', error);
      }
    }
  };

  return (
    <>
      <View style={inputGroup}>
        <Text style={labelText}>Your Name:</Text>
        <View style={inputValues}>
          <TextInput
            style={inputItem}
            value={name}
            onChangeText={(val) => setName(val)}
            placeholder="John Smith"
          />
        </View>
      </View>
      <View style={inputGroupPicker}>
        <Text style={text}>Choose Cable Type:</Text>
        <View style={pickerView}>
          <Picker selectedValue={issue} onValueChange={(val) => setIssue(val)}>
            {issueNames.map((issue) => (
              <Picker.Item
                key={issue}
                value={issue}
                label={issue ? issue : 'Choose Issue'}
              />
            ))}
          </Picker>
        </View>
      </View>
      <View style={inputGroup}>
        <View style={inputValues}>
          <TextInput
            style={inputItemMultiline}
            value={description}
            onChangeText={(val) => setDescription(val)}
            placeholder="Problem or Suggestion"
            multiline
            numberOfLines={8}
          />
        </View>
      </View>
      <Button title="Submit" onPress={onSubmit} />
    </>
  );
}

const { text, inputGroup: inputGroupPicker, pickerView } = pickerStyles;

const { inputGroup, labelText, inputValues, inputItem, inputItemMultiline } =
  StyleSheet.create({
    inputGroup: {
      marginHorizontal: st.spacingDefault,
      marginVertical: st.spacingDefault / 2,
      display: 'flex',
      flexDirection: 'column',
    },
    labelText: {
      fontFamily: 'Outfit-Light',
      color: st.secondaryColor,
      fontSize: st.fontSizePri,
    },
    inputValues: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    inputItem: {
      flex: 1,
      height: 32,
      backgroundColor: 'white',
      textAlign: 'left',
      paddingLeft: 5,
      fontFamily: 'Outfit-Light',
      borderRadius: 5,
    },
    inputItemMultiline: {
      flex: 1,
      minHeight: 32,
      backgroundColor: 'white',
      textAlign: 'left',
      textAlignVertical: 'top',
      padding: 5,
      fontFamily: 'Outfit-Light',
      borderRadius: 5,
    },
  });
