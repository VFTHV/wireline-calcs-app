import { NavItem } from '../components';
import { pathNames } from '../database/routes';
import { AiOutlineMail } from 'react-icons/ai';
import { BsExclamationTriangle } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

export const NavPage = () => {
  return (
    <nav className="navigation">
      <ul>
        <NavItem to={pathNames.units} icon={<FiSettings />}>
          Change Measurement Units
        </NavItem>
        <NavItem to={pathNames.weakpoint}>Weak Point Calculator</NavItem>
        <NavItem to={pathNames.weightbar}>Sinker Bar Weight Calculator</NavItem>
        <NavItem to={pathNames.stretch}>Cable Stretch Calculator</NavItem>
        <NavItem to={pathNames.keyseat}>
          Cable Stuck Depth {`(Keyseat)`}
        </NavItem>
        <NavItem to={pathNames.tensionAtDepth}>Max. Tension at Depth</NavItem>
        <NavItem to={pathNames.csgSpecs}>Casing/Tubing Specs</NavItem>
        <NavItem to={pathNames.tempCorrLength}>Temp. Corrected Length</NavItem>
        <NavItem to={pathNames.cbl}>Cement Bond Log Calcs</NavItem>
        <NavItem to={pathNames.fluidVelocity}>Fluid Velocity</NavItem>
        <NavItem to={pathNames.feedback} icon={<AiOutlineMail />}>
          Report a Problem
        </NavItem>
        <NavItem to={pathNames.disclaimer} icon={<BsExclamationTriangle />}>
          Disclaimer
        </NavItem>
      </ul>
    </nav>
  );
};
