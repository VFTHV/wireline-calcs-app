import { StyleSheet, View } from 'react-native';
import CableSelector from '../components/CableSelector';
import { CurrentCableSpecs } from '../components/CurrentCableSpecs';
import { CableManualEntrance } from '../components/CableManualEntrance';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../store';
import { RadioDualInput } from '../components/RadioDualInput';

export default function WeakPoint() {
  const dispatch = useDispatch();
  const { currentCable, toolWeight, depth, environment } = useSelector(
    (state: StoreState) => state.weakPoint
  );

  return (
    <View>
      <CableSelector />
      {currentCable.type === 'MANUAL' ? (
        <CableManualEntrance
          specs={['outerArmorBS', 'weightInAir', 'maxTension']}
        />
      ) : (
        <CurrentCableSpecs
          specs={['outerArmorBS', 'weightInAir', 'maxTension']}
        />
      )}
      <RadioDualInput />
    </View>
  );
}

const {} = StyleSheet.create({});
