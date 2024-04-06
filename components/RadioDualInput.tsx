import { FC, ChangeEvent } from 'react';

interface RadioDualInputProps {
  values: [string, string];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  currentValue: string;
}

export const RadioDualInput: FC<RadioDualInputProps> = ({
  values,
  onChange,
  currentValue,
}) => {
  return (
    <form aria-label="dual input group to choose measurement units">
      <div className="radio-container">
        <label>
          <input
            type="radio"
            name="option1"
            value={values[0]}
            onChange={onChange}
            checked={currentValue === values[0]}
          />
          <div className="left label-container">{values[0].toUpperCase()}</div>
        </label>
        <label>
          <input
            type="radio"
            name="option2"
            value={values[1]}
            onChange={onChange}
            checked={currentValue === values[1]}
          />
          <div className="label-container right">{values[1].toUpperCase()}</div>
        </label>
      </div>
    </form>
  );
};
