import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { pickerStyles, styleVariables as st } from '../styles/global';
import { Picker } from '@react-native-picker/picker';
import customFetch from '../apis/axios';
import { AxiosError, AxiosResponse } from 'axios';
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

type ErrorResponse = {
  statusCode: string;
  msg: string;
};

type SuccessResponse = {
  name: string;
  issue: string;
  description: string;
  msg: string;
};
// SuccessResponseType

export default function Feedback() {
  const [name, setName] = useState('');
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    setSubmitted(true);
    if (!name || !issue || !description) {
      Toast.show({ type: 'error', text1: 'Please fill out all fields' });
      setIsLoading(false);
      return;
    }
    try {
      const response: AxiosResponse<SuccessResponse> = await customFetch.post(
        'api/v1/form',
        { name, issue, description }
      );

      Toast.show({ type: 'success', text1: response.data.msg });
      // setName('');
      // setIssue('');
      // setDescription('');
      setSubmitted(false);
      setIsLoading(false);
    } catch (error: any) {
      if (error.isAxiosError) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data as ErrorResponse;

        Toast.show({
          type: 'error',
          text1:
            responseData?.msg || axiosError?.message || 'Problem with form',
        });
        setIsLoading(false);
      } else {
        // Handle non-Axios errors
        Toast.show({
          type: 'error',
          text1: 'Problem with form. Try again later',
        });
        setIsLoading(false);
      }
    }
  };
  isLoading && setIsLoading(false);
  return (
    <>
      <View style={inputGroup}>
        <Text style={labelText}>Your Name:</Text>
        <View style={inputValues}>
          <TextInput
            style={[inputItem, !name && submitted ? errorBorder : []]}
            value={name}
            onChangeText={(val) => setName(val)}
            placeholder="John Smith"
          />
        </View>
      </View>
      <View style={inputGroupPicker}>
        <Text style={text}>Choose Cable Type:</Text>
        <View style={[pickerView, !issue && submitted ? errorBorder : []]}>
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
            style={[
              inputItemMultiline,
              !description && submitted ? errorBorder : [],
            ]}
            value={description}
            onChangeText={(val) => setDescription(val)}
            placeholder="Problem or Suggestion"
            multiline
            numberOfLines={8}
          />
        </View>
      </View>
      <View style={button}>
        <Button title="Submit" disabled={isLoading} onPress={onSubmit} />
      </View>
    </>
  );
}

const { text, inputGroup: inputGroupPicker, pickerView } = pickerStyles;

const {
  inputGroup,
  labelText,
  inputValues,
  inputItem,
  inputItemMultiline,
  errorBorder,
  button,
} = StyleSheet.create({
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
  errorBorder: {
    borderWidth: 1,
    borderColor: 'red',
  },
  button: {
    marginHorizontal: st.spacingDefault,
    alignItems: 'flex-start',
  },
});
