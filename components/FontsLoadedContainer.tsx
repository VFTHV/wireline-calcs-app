import { StyleSheet, View } from 'react-native';
import React, { ReactNode } from 'react';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { styleVariables as st } from '../styles/global';

SplashScreen.preventAutoHideAsync();

interface FontsLoadedContainerProps {
  children: ReactNode;
}

export default function FontsLoadedContainer({
  children,
}: FontsLoadedContainerProps) {
  const [fontsLoaded, fontError] = useFonts({
    'Outfit-Bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'Outfit-Light': require('../assets/fonts/Outfit-Light.ttf'),
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
      {children}
    </View>
  );
}

const { container } = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: st.primaryColor,
    flex: 1,
  },
});
