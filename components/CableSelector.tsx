import { ChangeEvent, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState, changeCable } from '../store';
import { cablesData } from '../database/cables';

export const CableSelector: FC = () => {
  const dispatch = useDispatch();
  const { currentCable } = useSelector((state: StoreState) => state.weakPoint);

  const handleCableChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCable = cablesData.find(
      (cable) => cable.type === e.target.value
    );
    if (selectedCable) {
      dispatch(changeCable(selectedCable));
    }
  };

  return (
    <div className="input-group">
      <label
        htmlFor="cable"
        id="choose-cable"
        aria-label="Choose wireline cable"
      >
        Choose Cable Type:
      </label>
      <select
        className="input-item"
        id="cable"
        name="cable"
        value={currentCable.type}
        onChange={handleCableChange}
      >
        {cablesData.map((cable) => {
          return (
            <option
              key={cable.type}
              value={cable.type}
              aria-labelledby="choose-cable"
            >
              {cable.type}
            </option>
          );
        })}
      </select>
    </div>
  );
};
