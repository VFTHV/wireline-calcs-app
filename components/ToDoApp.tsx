import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './Header';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

export default function ToDoApp() {
  const [todos, setTodos] = useState<{ text: string; key: string }[]>([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key: string) => {
    setTodos((prev) => prev.filter((todo) => todo.key !== key));
  };

  const addTodo = (todoText: string) => {
    setTodos((prev) => {
      const newTodo = { text: todoText, key: Math.random().toString() };
      return [newTodo, ...prev];
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* to do form */}
          <AddTodo addTodo={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
