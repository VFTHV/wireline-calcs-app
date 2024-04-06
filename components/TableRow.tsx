import { FC } from 'react';
import { useConvertUnits } from '../logics/useConvertUnits';
import { UnitType } from '../store/slices/types';

interface TableRowProps {
  children: string;
  data: number | string | undefined;
  units: UnitType;
  dataMaxTolerance?: number;
}

export const TableRow: FC<TableRowProps> = ({
  children,
  data,
  units,
  dataMaxTolerance,
}) => {
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

  return (
    <tr className="t-row" aria-label={`table group displaying in ${units}`}>
      <th className="t-head">{`${children}, ${units}`}</th>
      <td className="t-data">
        <div>{displayData()}</div>
        <div className="warning">{renderWarning()}</div>
      </td>
    </tr>
  );
};
