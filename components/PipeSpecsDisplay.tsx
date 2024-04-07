import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FC, ReactNode, Fragment } from 'react';
import TableRow from './TableRow';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import { PipeSpecsKey } from '../database/casingsTubings';

interface PipeSpecsDisplayProps {
  typeId: 'casing' | 'tubing';
  specs: PipeSpecsKey[];
  pipeThck?: boolean;
}

export default function PipeSpecsDisplay({
  typeId,
  specs,
  pipeThck,
}: PipeSpecsDisplayProps) {
  const unitSystem = useSelector((state: StoreState) => state.unitSystem);
  const { casing, tubing } = useSelector((state: StoreState) => state.cbl);

  const selectedPipe = typeId === 'casing' ? casing : tubing;

  const pipeWord =
    typeId.charAt(0).toUpperCase() + typeId.slice(1).toLowerCase();

  if (!selectedPipe) return <></>;

  const content: { [key in PipeSpecsKey]: ReactNode } = {
    od: (
      <>
        <TableRow data={selectedPipe?.od} units={unitSystem.diameterUnits}>
          {`${pipeWord} OD`}
        </TableRow>
      </>
    ),
    nom: <>TBD for developer</>,
    weight: (
      <>
        <TableRow data={selectedPipe?.weight} units={unitSystem.diameterUnits}>
          {`${pipeWord} Weight`}
        </TableRow>
      </>
    ),
    id: (
      <>
        <TableRow data={selectedPipe?.id} units={unitSystem.diameterUnits}>
          {`${pipeWord} ID`}
        </TableRow>
      </>
    ),
    drift: (
      <>
        <TableRow data={selectedPipe?.drift} units={unitSystem.diameterUnits}>
          {`${pipeWord} Drift`}
        </TableRow>
      </>
    ),
    capacity: (
      <>
        <TableRow
          data={selectedPipe?.capacity}
          units={unitSystem.diameterUnits}
        >
          {`${pipeWord} Capacity`}
        </TableRow>
      </>
    ),
  };

  const thickness = +((selectedPipe.od - selectedPipe.id) / 2).toFixed(3);

  return (
    <View>
      {specs.map((spec) => {
        return <Fragment key={spec}>{content[spec]}</Fragment>;
      })}
      {pipeThck && (
        <TableRow data={thickness} units={unitSystem.diameterUnits}>
          {`${pipeWord} Thickness`}
        </TableRow>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
