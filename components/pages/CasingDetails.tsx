import { FC } from 'react';
import { casingData, tubingData } from '../database/casingsTubings';
import { NavHeader, PipeSelector, PipeSpecsDisplay } from '../components';
import { LargeScreenWrapper } from '../components/LargeScreenWrapper';

export const CasingDetails: FC = () => {
  return (
    <LargeScreenWrapper>
      <NavHeader>Casing/Tubing Specs</NavHeader>
      <PipeSelector pipeData={casingData} typeId="casing" />
      <PipeSpecsDisplay
        typeId="casing"
        specs={['id', 'drift', 'capacity']}
        pipeThck
      />
      <PipeSelector pipeData={tubingData} typeId="tubing" />
      <PipeSpecsDisplay
        typeId="tubing"
        specs={['id', 'drift', 'capacity']}
        pipeThck
      />
    </LargeScreenWrapper>
  );
};
