import { StyleSheet, Text, ScrollView } from 'react-native';
import React from 'react';
import { styleVariables as st } from '../styles/global';

export default function Disclaimer() {
  return (
    <ScrollView style={container}>
      <Text style={disclaimerText}>
        The calculations provided by this application are intended for
        informational purposes only and should not be relied upon as
        professional engineering advice. While every effort has been made to
        ensure the accuracy of the calculations, we do not guarantee their
        completeness, correctness, or suitability for any specific purpose.
      </Text>
      <Text style={disclaimerText}>
        It is important to note that engineering calculations can involve
        complex variables and considerations, and there may be factors that are
        not accounted for in this application. Users are advised to
        independently verify the results and consult with a qualified
        professional engineer for any critical or safety-related applications.
      </Text>
      <Text style={disclaimerText}>
        By using this application, you acknowledge that the calculations are
        provided as-is without any warranty or representation of accuracy or
        reliability. The developers and operators of this application shall not
        be held liable for any damages or losses resulting from the use of the
        calculations or reliance on the information provided.
      </Text>
      <Text style={disclaimerText}>
        Please use caution and exercise your professional judgment when
        interpreting the results and making decisions based on them. If you have
        any doubts or concerns about the accuracy of the calculations, it is
        recommended to seek guidance from a licensed professional engineer.
      </Text>
    </ScrollView>
  );
}

const { container, disclaimerText } = StyleSheet.create({
  container: {
    margin: st.spacingDefault,
  },
  disclaimerText: {
    marginVertical: 5,
    color: st.secondaryColor,
    fontFamily: 'Outfit-Light',
    fontSize: st.fontSizePri,
  },
});
