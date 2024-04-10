import {
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { styleVariables as st } from '../styles/global';

import { modalContent } from '../database/modalContent';
import { PathNamesType } from '../database/routes';

type QuestionModalPropsType = {
  modalContentKey: keyof Partial<PathNamesType>;
};

export default function QuestionModal({
  modalContentKey,
}: QuestionModalPropsType) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // if no prop, then 'SORRY, NO CONTENT' in title and in content section
  // create a button with touchable opacity at the corner of the screen
  //  which will be closing the modal
  return (
    <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
      <AntDesign name="questioncircleo" size={24} color="white" />
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableHighlight onPress={() => setIsModalVisible(!isModalVisible)}>
          <ScrollView style={container}>
            <Text style={[standardText, header]}>
              {modalContent[modalContentKey]?.title}
            </Text>
            {modalContent[modalContentKey]?.content.map((text) => (
              <Text key={text.substring(0, 15)} style={[standardText, content]}>
                {text}
              </Text>
            ))}
          </ScrollView>
        </TouchableHighlight>
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
