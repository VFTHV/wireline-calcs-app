import { FC, ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { styleVariables as st } from '../styles/global';

interface NavItemProps {
  to: string;
  children: string | string[];
  icon?: ReactNode;
}

export const NavItem: FC<NavItemProps> = ({ to, children, icon }) => {
  return (
    <View aria-label={`link item to ${to}`}>
      <View style={styles.navitem}>
        {icon ? (
          icon
        ) : (
          <Ionicons name="calculator-outline" size={24} color="black" />
        )}
        {children}
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navitem: {
    // paddingVertical: 0,
    paddingHorizontal: st.spacingDefault,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: st.darkColor,
  },
});
