import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function TextAndInput() {
  const [name, setName] = useState('Vadim');
  const [age, setAge] = useState('30');

  const clickHandler = () => {
    const newName = name === 'Vadim' ? 'Zhenya' : 'Vadim';
    setName(newName);
  };

  return (
    <>
      <Text>Enter name</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. John Doe"
        onChangeText={(value) => setName(value)}
        value={name}
      />
      <Text>Enter age</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 99"
        onChangeText={(value) => setAge(value)}
        value={age}
      />

      <Text>
        Name: {name}, age: {age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
