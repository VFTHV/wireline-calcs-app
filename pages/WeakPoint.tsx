import { StyleSheet, Text, View } from 'react-native';
import CableSelector from '../components/CableSelector';
import TableRow from '../components/TableRow';

export default function WeakPoint() {
  return (
    <View>
      <CableSelector />

      <TableRow data={100} units="degF">
        Cable Breaking Strength
      </TableRow>
    </View>
  );
}

const {} = StyleSheet.create({});
