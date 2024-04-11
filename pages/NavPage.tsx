import { View, ScrollView } from 'react-native';
import React from 'react';
import { NavItem } from '../components/NavItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { pathNames } from '../database/routes';

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
          to={pathNames.units}
          icon={<Feather name="settings" size={24} color="white" />}
        >
          Change Measurement Units
        </NavItem>
        <NavItem navigation={navigation} to={pathNames.weakpoint}>
          Weak Point Calculator
        </NavItem>
        <NavItem navigation={navigation} to={pathNames.weightbar}>
          Sinker Bar Weight Calculator
        </NavItem>
        <NavItem navigation={navigation} to={pathNames.stretch}>
          Cable Stretch Calculator
        </NavItem>
        <NavItem navigation={navigation} to={pathNames.keyseat}>
          Cable Stuck Depth {`(Keyseat)`}
        </NavItem>
        <NavItem navigation={navigation} to={pathNames.tensionAtDepth}>
          Max. Tension at Depth
        </NavItem>
        <NavItem navigation={navigation} to={pathNames.csgSpecs}>
          Casing/Tubing Specs
        </NavItem>
        <NavItem navigation={navigation} to={pathNames.tempCorrLength}>
          Temp. Corrected Length
        </NavItem>
        <NavItem navigation={navigation} to={pathNames.cbl}>
          Cement Bond Log Calcs
        </NavItem>
        <NavItem navigation={navigation} to={pathNames.fluidVelocity}>
          Fluid Velocity
        </NavItem>
        {/* <NavItem navigation={navigation} to={pathNames.feedback}>
          Feedback
        </NavItem> */}
        <NavItem navigation={navigation} to={pathNames.disclaimer}>
          Disclaimer
        </NavItem>
      </View>
    </ScrollView>
  );
}
