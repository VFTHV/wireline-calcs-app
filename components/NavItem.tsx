import { FC, ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { styleVariables as st } from '../styles/global';

interface NavItemProps {
  // to: string;
  children: string | string[];
  fontsLoaded: boolean;
  icon?: ReactNode;
}

export const NavItem: FC<NavItemProps> = ({ children, fontsLoaded, icon }) => {
  if (!fontsLoaded) return;

  return (
    <View aria-label={`link item to`}>
      <View style={navitem}>
        {icon ? (
          icon
        ) : (
          <Ionicons name="calculator-outline" size={24} color="white" />
        )}
        <Text style={navItemText}>{children}</Text>
        <Entypo name="chevron-right" size={24} color="white" />
      </View>
    </View>
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
  },
  navItemText: {
    fontFamily: 'Outfit-Light',
    fontSize: st.fontSizePri,
    color: 'white',
  },
});
