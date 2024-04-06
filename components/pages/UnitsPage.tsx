import { ChangeEvent } from 'react';
import { NavHeader, RadioDualInput } from '../components';
import {
  DepthUnits,
  WeightUnits,
  DiameterUnits,
  PressureUnits,
  CapacityUnits,
  TempUnits,
  ResistivityUnits,
  MeasurementType,
  PumpRateUnits,
  VelocityUnits,
  AllUnitsType,
} from '../store/slices/types';
import {
  StoreState,
  changeDepthUnits,
  changeWeightUnits,
  changeDiameterUnits,
  changePressureUnits,
  changeCapacityUnits,
  changeTempUnits,
  changeResistivityUnits,
  changePumpRateUnits,
  changeVelocityUnits,
  changeAll,
} from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { measurementObject as mo } from '../store/slices/types';
import { useLocalStorage } from '../logics/useLocalStorageSet';
import { LargeScreenWrapper } from '../components/LargeScreenWrapper';

export const UnitsPage = () => {
  const dispatch = useDispatch();
  const {
    depthUnits,
    weightUnits,
    diameterUnits,
    pressureUnits,
    capacityUnits,
    tempUnits,
    resistivityUnits,
    allUnits,
    pumpRateUnits,
    velocityUnits,
  } = useSelector((state: StoreState) => state.unitSystem);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    action: ActionCreatorWithPayload<any>,
    name: MeasurementType
  ) => {
    dispatch(action(e.target.value));
    localStorage.setItem(name, e.target.value);
  };

  const { setAllLocalStorageUnits } = useLocalStorage();

  return (
    <LargeScreenWrapper>
      <NavHeader>Change Measurement Units</NavHeader>
      <h4
        className="err-header"
        aria-label="measurement unit change page heading"
      >
        CHANGE ALL UNITS
      </h4>
      <RadioDualInput
        values={['ENGLISH', 'METRIC']}
        onChange={(e) => {
          dispatch(changeAll(e.target.value));
          setAllLocalStorageUnits(e.target.value as AllUnitsType);
        }}
        currentValue={allUnits}
      />
      <h4 className="err-header">CHANGE UNITS ONE BY ONE</h4>
      <RadioDualInput
        values={[DepthUnits.FT, DepthUnits.M]}
        onChange={(e) =>
          mo.depth && handleChange(e, changeDepthUnits, mo.depth)
        }
        currentValue={depthUnits}
      />
      <RadioDualInput
        values={[PressureUnits.PSI, PressureUnits.ATM]}
        onChange={(e) =>
          mo.pressure && handleChange(e, changePressureUnits, mo.pressure)
        }
        currentValue={pressureUnits}
      />
      <RadioDualInput
        values={[DiameterUnits.INCH, DiameterUnits.MM]}
        onChange={(e) =>
          mo.diameter && handleChange(e, changeDiameterUnits, mo.diameter)
        }
        currentValue={diameterUnits}
      />
      <RadioDualInput
        values={[WeightUnits.LBS, WeightUnits.KG]}
        onChange={(e) =>
          mo.toolWeight && handleChange(e, changeWeightUnits, mo.toolWeight)
        }
        currentValue={weightUnits}
      />
      <RadioDualInput
        values={[CapacityUnits.BBL, CapacityUnits.M3]}
        onChange={(e) =>
          mo.capacity && handleChange(e, changeCapacityUnits, mo.capacity)
        }
        currentValue={capacityUnits}
      />
      <RadioDualInput
        values={[TempUnits.DEGF, TempUnits.DEGC]}
        onChange={(e) =>
          mo.temperature && handleChange(e, changeTempUnits, mo.temperature)
        }
        currentValue={tempUnits}
      />
      <RadioDualInput
        values={[ResistivityUnits.OHM_KFT, ResistivityUnits.OHM_KM]}
        onChange={(e) =>
          mo.resistivity &&
          handleChange(e, changeResistivityUnits, mo.resistivity)
        }
        currentValue={resistivityUnits}
      />
      <RadioDualInput
        values={[PumpRateUnits.BBLMIN, PumpRateUnits.M3MIN]}
        onChange={(e) =>
          mo.pumpRate && handleChange(e, changePumpRateUnits, mo.pumpRate)
        }
        currentValue={pumpRateUnits}
      />
      <RadioDualInput
        values={[VelocityUnits.FTMIN, VelocityUnits.MMIN]}
        onChange={(e) =>
          mo.velocity && handleChange(e, changeVelocityUnits, mo.velocity)
        }
        currentValue={velocityUnits}
      />
    </LargeScreenWrapper>
  );
};
