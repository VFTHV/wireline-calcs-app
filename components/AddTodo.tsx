import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  const onPress = () => {
    if (!text) return;
    addTodo(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button onPress={onPress} title="add todo" color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
