import { useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavItem } from './components/NavItem';
import { styleVariables as st, styleVariables } from './styles/global';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavPage from './pages/NavPage';
import WeakPoint from './pages/WeakPoint';
import UnitsPage from './pages/UnitsPage';
import WeightBar from './pages/WeightBar';
import Stretch from './pages/Stretch';
import KeySeat from './pages/KeySeat';
import TensionAtDepth from './pages/TensionAtDepth';
import CsgSpecs from './pages/CsgSpecs';
import TempCorrectedLength from './pages/TempCorrectedLength';
import CBL from './pages/CBL';
import FluidVelocity from './pages/FluidVelocity';
import Feedback from './pages/Feedback';
import Disclaimer from './pages/Disclaimer';
import { Entypo } from '@expo/vector-icons';
import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { stackScreenOptions } from './styles/global';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'Outfit-Light': require('./assets/fonts/Outfit-Light.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <View style={container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="NavPage">
          <Stack.Screen name="NavPage" component={NavPage} />
          <Stack.Screen
            name="Units"
            component={UnitsPage}
            options={{
              ...stackScreenOptions,
              title: 'Choose Measurement Units',
            }}
          />
          <Stack.Screen
            name="WeakPoint"
            component={WeakPoint}
            options={{ ...stackScreenOptions, title: 'Weak Point' }}
          />
          <Stack.Screen
            name="WeightBar"
            component={WeightBar}
            options={{ ...stackScreenOptions, title: 'Weight Bar' }}
          />
          <Stack.Screen
            name="Stretch"
            component={Stretch}
            options={{
              ...stackScreenOptions,
              title: 'Cable Stretch Calculator',
            }}
          />
          <Stack.Screen
            name="KeySeat"
            component={KeySeat}
            options={{
              ...stackScreenOptions,
              title: 'Cable Stuck Depth (Keyseat)',
            }}
          />
          <Stack.Screen
            name="TensionAtDepth"
            component={TensionAtDepth}
            options={{ ...stackScreenOptions, title: 'Max. Tension at Depth' }}
          />
          <Stack.Screen
            name="CsgSpecs"
            component={CsgSpecs}
            options={{ ...stackScreenOptions, title: 'Casing/Tubing Specs' }}
          />
          <Stack.Screen
            name="TempCorrLength"
            component={TempCorrectedLength}
            options={{ ...stackScreenOptions, title: 'Temp. Corrected Length' }}
          />
          <Stack.Screen
            name="CBL"
            component={CBL}
            options={{ ...stackScreenOptions, title: 'Cement Bond Log Calcs' }}
          />
          <Stack.Screen
            name="FluidVelocity"
            component={FluidVelocity}
            options={{ ...stackScreenOptions, title: 'Fluid Velocity' }}
          />
          <Stack.Screen
            name="Feedback"
            component={Feedback}
            options={{ ...stackScreenOptions }}
          />
          <Stack.Screen
            name="Disclaimer"
            component={Disclaimer}
            options={{ ...stackScreenOptions, title: 'Weak Point' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const { container } = StyleSheet.create({
  container: {
    padding: st.spacingDefault,
    paddingTop: 50,
    backgroundColor: st.primaryColor,
    flex: 1,
  },
});
