import { computeStyles } from '@utils/computeStyles';
import { TTextArea } from '@components/textArea/textArea.types';
import { useTextArea } from './textArea.hook';

export const TextArea = (props: TTextArea) => {
  const { className, label } = props;
  // currentValue can't be passed to input element because it's not a valid input's prop
  const { currentValue, ...rest } = props;
  const { handleOnChange, value } = useTextArea(props);
  return (
    <div className='w-full flex gap-1 flex-col font-normal'>
      {label && <p className='text-white'>{label}</p>}
      <textarea
        {...rest}
        className={computeStyles(
          'appearance-none w-full h-44 placeholder:text-white/50 p-m font-normal text-white rounded-lg bg-neutral-dark-black border border-solid border-white hover:border-primary focus:border-primary focus:outline-0',
          {
            condition: className !== undefined,
            valid: className,
          }
        )}
        onChange={(e) => handleOnChange(e.target.value)}
        value={value}
      />
    </div>
  );
};
