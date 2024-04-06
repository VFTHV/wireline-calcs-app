import { StyleSheet, Text, View } from 'react-native';
import { CableSelector } from '../components/CableSelector';

export default function WeakPoint() {
  console.log('hello');
  return (
    <View>
      <CableSelector />
      <Text>WeakPointdd</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
