import { computeStyles } from '@utils/computeStyles';
import { TInput } from '@components/input/input.types';
import { useInput } from '@components/input/input.hook';

import './input.css';

export const Input = (props: TInput) => {
  const { className, label, name, field } = props;
  const { value, handleOnChange } = useInput(props);
  // currentValue, inputSize can't be passed to input element because it's not a valid input's prop
  const { currentValue, inputSize = 'full', ...rest } = props;

  const btnSize = {
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64',
    full: 'w-full',
  };

  return (
    <div className='w-full flex gap-1 flex-col font-normal'>
      {label && <p className='text-white'>{label}</p>}
      <input
        {...rest}
        className={computeStyles(`input ${btnSize[inputSize]}`, {
          condition: className !== undefined,
          valid: className,
        })}
        name={field?.name ?? name}
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
