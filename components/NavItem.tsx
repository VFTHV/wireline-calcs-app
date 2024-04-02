import { FC, ReactNode } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { styleVariables as st } from '../styles/global';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../pages/NavPage';

interface NavItemProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  to: keyof RootStackParamList;
  children: string | string[];
  icon?: ReactNode;
}

export const NavItem: FC<NavItemProps> = ({
  children,
  icon,
  navigation,
  to,
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(to)}>
      <View style={navitem}>
        {icon ? (
          icon
        ) : (
          <Ionicons name="calculator-outline" size={24} color="white" />
        )}
        <Text style={navItemText}>{children}</Text>
        <Entypo name="chevron-right" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const { navitem, navItemText } = StyleSheet.create({
  navitem: {
    padding: st.spacingDefault,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: st.darkColor,
    backgroundColor: st.primaryColor,
  },
  navItemText: {
    fontFamily: 'Outfit-Light',
    fontSize: st.fontSizePri,
    color: 'white',
  },
});
