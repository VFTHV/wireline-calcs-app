import { StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function QuestionModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log(isModalVisible);
  return (
    <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
      <AntDesign name="questioncircleo" size={24} color="black" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quae
            ea sunt dolor eius laborum ipsam consequatur blanditiis libero eos.
          </Text>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
