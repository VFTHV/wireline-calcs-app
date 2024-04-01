import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import { NavItem } from '../components/NavItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
        <NavItem navigation={navigation} to="Units">
          Choose Units
        </NavItem>
        <NavItem navigation={navigation} to="WeakPoint">
          Weak Point
        </NavItem>
        <NavItem navigation={navigation} to="WeightBar">
          Weight Bar
        </NavItem>
        <NavItem navigation={navigation} to="Stretch">
          Stretch
        </NavItem>
        <NavItem navigation={navigation} to="KeySeat">
          KeySeat
        </NavItem>
        <NavItem navigation={navigation} to="TensionAtDepth">
          Tension At Depth
        </NavItem>
        <NavItem navigation={navigation} to="CsgSpecs">
          Casing Specs
        </NavItem>
        <NavItem navigation={navigation} to="TempCorrLength">
          Temp. Corrected Length
        </NavItem>
        <NavItem navigation={navigation} to="CBL">
          CBL Calcs
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
