import { StyleSheet, View } from 'react-native';
import CableSelector from '../components/CableSelector';
import { CurrentCableSpecs } from '../components/CurrentCableSpecs';
import { CableManualEntrance } from '../components/CableManualEntrance';

export default function WeakPoint() {
  return (
    <View>
      <CableSelector />
      {/* <CurrentCableSpecs
        specs={[
          'breakingStrength',
          'outerArmorBS',
          'weightInAir',
          'maxTension',
        ]}
      /> */}
      <CableManualEntrance
        specs={['outerArmorBS', 'weightInAir', 'maxTension']}
      />
    </View>
  );
}

const {} = StyleSheet.create({});
