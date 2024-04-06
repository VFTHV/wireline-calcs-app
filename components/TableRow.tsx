import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useConvertUnits } from '../logics/useConvertUnits';
import { UnitType } from '../store/slices/types';
import { styleVariables as st } from '../styles/global';

interface TableRowProps {
  children: string;
  data: number | string | undefined;
  units: UnitType;
  dataMaxTolerance?: number;
}

export default function TableRow({
  children,
  data,
  units,
  dataMaxTolerance,
}: TableRowProps) {
  const { convertToMetric } = useConvertUnits();

  const displayData = () => {
    if (!data) return '';
    if (typeof data === 'number') {
      let convData = convertToMetric(data, units);
      return convData;
    }
    return data;
  };

  const renderWarning = () => {
    if (typeof data !== 'number' || !dataMaxTolerance) return;
    if (data > dataMaxTolerance) {
      return `value exceeds tolerance of ${dataMaxTolerance} ${units}`;
    }
  };
  const renderWarningCondition = () => {
    return typeof data !== 'number' || !dataMaxTolerance ? false : true;
  };

  return (
    <View style={tRow} aria-label={`table group displaying in ${units}`}>
      <View style={[rowItem]}>
        <Text style={tHead}>{`${children}, ${units}`}</Text>
      </View>
      <View style={[rowItem]}>
        <Text style={tData}>{displayData()}</Text>
        {renderWarningCondition() && (
          <Text style={warning}>{renderWarning()}</Text>
        )}
      </View>
    </View>
  );
}

const { tRow, rowItem, tHead, tData, warning } = StyleSheet.create({
  tRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: st.secondaryColor,
  },
  rowItem: {
    borderWidth: 1,
    borderColor: st.gray,
    flex: 1,
    padding: st.spacingDefault,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tHead: {
    color: st.primaryColor,
    fontFamily: 'Outfit-Bold',
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  tData: {
    color: st.black,
    fontSize: 32,
    fontFamily: 'Outfit-Light',
  },
  warning: {
    fontSize: 16,
    color: 'red',
  },
});
