import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState, changeCable } from '../store';
import { cablesData } from '../database/cables';
import { pickerStyles } from '../styles/global';

export default function CableSelector() {
  const dispatch = useDispatch();
  const { currentCable } = useSelector((state: StoreState) => state.weakPoint);
  // pickerview style
  // pickerview style
  // pickerview style
  const handleCableChange = (itemValue: string) => {
    const selectedCable = cablesData.find((cable) => cable.type === itemValue);
    if (selectedCable) {
      dispatch(changeCable(selectedCable));
    }
  };

  return (
    <View style={inputGroup}>
      <Text style={text}>Choose Cable Type:</Text>
      <View style={pickerView}>
        <Picker
          selectedValue={currentCable.type}
          onValueChange={handleCableChange}
        >
          {cablesData.map((cable) => {
            return (
              <Picker.Item
                key={cable.type}
                value={cable.type}
                label={cable.type}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
}

const { text, inputGroup, pickerView } = pickerStyles;
