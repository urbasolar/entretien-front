import { computeStyles } from '@utils/computeStyles';
import { TSelect } from '@components/select/select.types';
import { useSelect } from '@components/select/select.hook';

import '@components/select/select.css';
import { SelectContent } from '@components/select/selectContent';
import { CrossToDelete } from './crossToDelete';
import { ChevronIndicator } from './chevronIndicator';

export const Select = (props: TSelect) => {
  const {
    isMulti,
    placeholder = 'Select',
    label,
    disabled,
    size = 'full',
  } = props;
  const {
    selected,
    isOpen,
    optionsFormatted,
    handleClickOnOption,
    removeOneSelected,
    handleClickToOpenOptions,
    ref,
    cleanSelect,
  } = useSelect(props);

  const sizes = {
    sm: 'w-48',
    md: 'w-64',
    lg: 'w-96',
    full: 'w-full',
  };

  return (
    <div className={`relative ${sizes[size]}`} ref={ref}>
      <p className='text-white'>{label}</p>
      <div
        className={computeStyles('select-input', {
          condition: disabled,
          valid: 'border-white/20 cursor-not-allowed',
          unvalid: 'border-white/40 cursor-pointer hover:border-primary',
        })}
        onClick={handleClickToOpenOptions}
      >
        <div className='h-[36px] overflow-y-auto flex items-center flex-wrap text-white'>
          <SelectContent
            isMulti={isMulti}
            placeholder={placeholder}
            selected={selected}
            removeOneSelected={removeOneSelected}
          />
        </div>
        <div className='flex gap-2'>
          <CrossToDelete cleanSelect={cleanSelect} selected={selected} />
          <div className='border-l border-solid border-neutral-gray sticky'>
            <ChevronIndicator isOpen={isOpen} />
          </div>
        </div>
      </div>
      <ul
        className={computeStyles('select-options', {
          condition: isOpen,
          valid: 'visible',
          unvalid: 'hidden',
        })}
      >
        {optionsFormatted.map((option) => (
          <li
            key={option.value}
            onClick={() => handleClickOnOption(option)}
            className='hover:bg-neutral-dark-light py-xs font-normal'
          >
            <span className='px-l'>{option.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
