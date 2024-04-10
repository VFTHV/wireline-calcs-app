import {
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { styleVariables as st } from '../styles/global';

export default function QuestionModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // if no prop, then 'SORRY, NO CONTENT' in title and in content section
  return (
    <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
      <AntDesign name="questioncircleo" size={24} color="white" />
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
          <ScrollView style={container}>
            <Text style={[standardText, header]}>Lorem, ipsum dolor.</Text>
            <Text style={[standardText, content]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              voluptatum nihil corrupti odit reiciendis eum iusto ipsum
              repudiandae quia vel odio facilis, sequi maiores eligendi
              distinctio repellendus enim quidem dolor.
            </Text>
          </ScrollView>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
}

const { container, standardText, header, content } = StyleSheet.create({
  container: {
    padding: st.spacingDefault,
    backgroundColor: st.primaryColor,
    height: '100%',
  },
  standardText: {
    marginVertical: 5,
    fontSize: st.fontSizePri,
    color: st.secondaryColor,
  },

  header: {
    textAlign: 'center',
    fontFamily: 'Outfit-Bold',
  },
  content: {
    fontFamily: 'Outfit-Light',
  },
});
