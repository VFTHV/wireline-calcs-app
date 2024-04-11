import {
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  ScrollView,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { styleVariables as st } from '../styles/global';
import { modalContent } from '../database/modalContent';
import { PathNamesType } from '../database/routes';
import { Entypo } from '@expo/vector-icons';

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

  const renderTitle = (): string => {
    const title = modalContent[modalContentKey]?.title;
    return title !== undefined ? title : 'Sorry, no content';
  };

  return (
    <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
      <AntDesign name="questioncircleo" size={24} color="white" />
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <ScrollView style={container}>
          <View style={titleContainer}>
            <Text style={[standardText, header]}>{renderTitle()}</Text>
            <TouchableOpacity
              onPress={() => setIsModalVisible(false)}
              style={closeIcon}
            >
              <Entypo name="circle-with-cross" size={24} color="white" />
            </TouchableOpacity>
          </View>
          {modalContent[modalContentKey]?.content.map((text) => (
            <Text key={text.substring(0, 15)} style={[standardText, content]}>
              {text}
            </Text>
          ))}
        </ScrollView>
      </Modal>
    </TouchableOpacity>
  );
}

const { container, titleContainer, standardText, header, closeIcon, content } =
  StyleSheet.create({
    container: {
      padding: st.spacingDefault,
      backgroundColor: st.primaryColor,
      height: '100%',
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      // alignItems: 'center',
      justifyContent: 'space-between',
    },
    standardText: {
      marginVertical: 5,
      fontSize: st.fontSizePri,
      color: st.secondaryColor,
    },
    closeIcon: {
      alignSelf: 'center',
    },
    header: {
      textAlign: 'center',
      fontFamily: 'Outfit-Bold',
      flexGrow: 1,
    },
    content: {
      fontFamily: 'Outfit-Light',
    },
  });
