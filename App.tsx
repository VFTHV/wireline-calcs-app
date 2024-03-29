import { StyleSheet, View } from 'react-native';
import TextAndInput from './TextAndInput';
import FlatListAndMap from './FlatListAndMap';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatListAndMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
