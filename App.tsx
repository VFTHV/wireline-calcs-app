import { useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavItem } from './components/NavItem';
import { styleVariables as st } from './styles/global';
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
          <Stack.Screen name="Units" component={UnitsPage} />
          <Stack.Screen
            name="WeakPoint"
            component={WeakPoint}
            options={{
              title: 'Weak Point',
            }}
          />
          <Stack.Screen name="WeightBar" component={WeightBar} />
          <Stack.Screen name="Stretch" component={Stretch} />
          <Stack.Screen name="KeySeat" component={KeySeat} />
          <Stack.Screen name="TensionAtDepth" component={TensionAtDepth} />
          <Stack.Screen name="CsgSpecs" component={CsgSpecs} />
          <Stack.Screen name="TempCorrLength" component={TempCorrectedLength} />
          <Stack.Screen name="CBL" component={CBL} />
          <Stack.Screen name="FluidVelocity" component={FluidVelocity} />
          <Stack.Screen name="Feedback" component={Feedback} />
          <Stack.Screen name="Disclaimer" component={Disclaimer} />
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
