import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Outfit-Light',
  },
});

export const styleVariables = {
  primaryColor: 'rgb(1, 82, 234)',
  modalColor: 'rgba(1, 82, 234, 0.95)',
  lightColor: 'rgb(1, 121, 234)',
  secondaryColor: 'rgb(255, 255, 255)',
  darkColor: 'rgb(0, 65, 216)',
  warningColor: 'rgba(255, 0, 0, 0.616)',
  gray: 'rgb(184, 177, 169)',
  black: 'black',
  spacingDefault: 16,
  fontSizePri: 19,
};

export const stackScreenOptions: Partial<NativeStackNavigationOptions> = {
  headerStyle: {
    backgroundColor: styleVariables.primaryColor,
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontFamily: 'Outfit-Bold',
  },
  headerTitleAlign: 'center',
  headerLeft: () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="chevron-left" size={24} color="white" />
      </TouchableOpacity>
    );
  },
};
