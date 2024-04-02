import { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { styleVariables as st } from './styles/global';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Pages } from './pages';

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
          <Stack.Screen
            name="NavPage"
            component={Pages.NavPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Units"
            component={Pages.UnitsPage}
            options={{
              ...stackScreenOptions,
              title: 'Choose Measurement Units',
            }}
          />
          <Stack.Screen
            name="WeakPoint"
            component={Pages.WeakPoint}
            options={{ ...stackScreenOptions, title: 'Weak Point' }}
          />
          <Stack.Screen
            name="WeightBar"
            component={Pages.WeightBar}
            options={{ ...stackScreenOptions, title: 'Weight Bar' }}
          />
          <Stack.Screen
            name="Stretch"
            component={Pages.Stretch}
            options={{
              ...stackScreenOptions,
              title: 'Cable Stretch Calculator',
            }}
          />
          <Stack.Screen
            name="KeySeat"
            component={Pages.KeySeat}
            options={{
              ...stackScreenOptions,
              title: 'Cable Stuck Depth (Keyseat)',
            }}
          />
          <Stack.Screen
            name="TensionAtDepth"
            component={Pages.TensionAtDepth}
            options={{ ...stackScreenOptions, title: 'Max. Tension at Depth' }}
          />
          <Stack.Screen
            name="CsgSpecs"
            component={Pages.CsgSpecs}
            options={{ ...stackScreenOptions, title: 'Casing/Tubing Specs' }}
          />
          <Stack.Screen
            name="TempCorrLength"
            component={Pages.TempCorrectedLength}
            options={{ ...stackScreenOptions, title: 'Temp. Corrected Length' }}
          />
          <Stack.Screen
            name="CBL"
            component={Pages.CBL}
            options={{ ...stackScreenOptions, title: 'Cement Bond Log Calcs' }}
          />
          <Stack.Screen
            name="FluidVelocity"
            component={Pages.FluidVelocity}
            options={{ ...stackScreenOptions, title: 'Fluid Velocity' }}
          />
          <Stack.Screen
            name="Feedback"
            component={Pages.Feedback}
            options={{ ...stackScreenOptions }}
          />
          <Stack.Screen
            name="Disclaimer"
            component={Pages.Disclaimer}
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
