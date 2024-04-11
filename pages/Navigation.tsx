import { NavigationContainer } from '@react-navigation/native';
import { styleVariables as st } from '../styles/global';
import { Pages } from '../pages';
import { stackScreenOptions } from '../styles/global';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestionModal from '../components/QuestionModal';

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="NavPage"
        screenOptions={{
          contentStyle: { backgroundColor: st.primaryColor },
        }}
      >
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
            title: 'Change Measurement Units',
            headerRight: (props) => <QuestionModal modalContentKey="units" />,
          }}
        />
        <Stack.Screen
          name="WeakPoint"
          component={Pages.WeakPoint}
          options={{
            ...stackScreenOptions,
            title: 'Weak Point',
            headerRight: (props) => (
              <QuestionModal modalContentKey="weakpoint" />
            ),
          }}
        />
        <Stack.Screen
          name="WeightBar"
          component={Pages.WeightBar}
          options={{
            ...stackScreenOptions,
            title: 'Weight Bar',
            headerRight: (props) => (
              <QuestionModal modalContentKey="weightbar" />
            ),
          }}
        />
        <Stack.Screen
          name="Stretch"
          component={Pages.Stretch}
          options={{
            ...stackScreenOptions,
            title: 'Cable Stretch Calculator',
            headerRight: (props) => <QuestionModal modalContentKey="stretch" />,
          }}
        />
        <Stack.Screen
          name="KeySeat"
          component={Pages.KeySeat}
          options={{
            ...stackScreenOptions,
            title: 'Cable Stuck Depth (Keyseat)',
            headerRight: (props) => <QuestionModal modalContentKey="keyseat" />,
          }}
        />
        <Stack.Screen
          name="TensionAtDepth"
          component={Pages.TensionAtDepth}
          options={{
            ...stackScreenOptions,
            title: 'Max. Tension at Depth',
            headerRight: (props) => (
              <QuestionModal modalContentKey="tensionAtDepth" />
            ),
          }}
        />
        <Stack.Screen
          name="CsgSpecs"
          component={Pages.CsgSpecs}
          options={{ ...stackScreenOptions, title: 'Casing/Tubing Specs' }}
        />
        <Stack.Screen
          name="TempCorrLength"
          component={Pages.TempCorrectedLength}
          options={{
            ...stackScreenOptions,
            title: 'Temp. Corrected Length',
          }}
        />
        <Stack.Screen
          name="CBL"
          component={Pages.CBL}
          options={{
            ...stackScreenOptions,
            title: 'Cement Bond Log Calcs',
          }}
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
          options={{ ...stackScreenOptions }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
