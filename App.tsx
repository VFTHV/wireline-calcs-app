import { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavItem } from './components/NavItem';
import { styleVariables as st } from './styles/global';

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

  return (
    <View style={container} onLayout={onLayoutRootView}>
      <NavItem fontsLoaded={fontsLoaded}>Weak Point Calculator</NavItem>
    </View>
  );
}

const { container } = StyleSheet.create({
  container: {
    padding: st.spacingDefault,
    paddingTop: 50,
    backgroundColor: st.primaryColor,
  },
});
