import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import { NavItem } from '../components/NavItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';

export type RootStackParamList = {
  Units: undefined;
  WeakPoint: undefined;
  WeightBar: undefined;
  Stretch: undefined;
  KeySeat: undefined;
  TensionAtDepth: undefined;
  CsgSpecs: undefined;
  TempCorrLength: undefined;
  CBL: undefined;
  FluidVelocity: undefined;
  Feedback: undefined;
  Disclaimer: undefined;
};

interface NavPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function NavPage({ navigation }: NavPageProps) {
  return (
    <ScrollView>
      <View>
        <NavItem
          navigation={navigation}
          to="Units"
          icon={<Feather name="settings" size={24} color="white" />}
        >
          Change Measurement Units
        </NavItem>
        <NavItem navigation={navigation} to="WeakPoint">
          Weak Point Calculator
        </NavItem>
        <NavItem navigation={navigation} to="WeightBar">
          Sinker Bar Weight Calculator
        </NavItem>
        <NavItem navigation={navigation} to="Stretch">
          Cable Stretch Calculator
        </NavItem>
        <NavItem navigation={navigation} to="KeySeat">
          Cable Stuck Depth {`(Keyseat)`}
        </NavItem>
        <NavItem navigation={navigation} to="TensionAtDepth">
          Max. Tension at Depth
        </NavItem>
        <NavItem navigation={navigation} to="CsgSpecs">
          Casing/Tubing Specs
        </NavItem>
        <NavItem navigation={navigation} to="TempCorrLength">
          Temp. Corrected Length
        </NavItem>
        <NavItem navigation={navigation} to="CBL">
          Cement Bond Log Calcs
        </NavItem>
        <NavItem navigation={navigation} to="FluidVelocity">
          Fluid Velocity
        </NavItem>
        <NavItem navigation={navigation} to="Feedback">
          Feedback
        </NavItem>
        <NavItem navigation={navigation} to="Disclaimer">
          Disclaimer
        </NavItem>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
