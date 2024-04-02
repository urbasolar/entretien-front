import { computeStyles } from '@utils/computeStyles';
import { TCrossToDelete } from '@components/select/select.types';

export const CrossToDelete = (props: TCrossToDelete) => {
  const { cleanSelect, selected } = props;
  return (
    <svg
      onClick={cleanSelect}
      width='12px'
      height='12px'
      viewBox='0 0 24 24'
      id='cross'
      data-name='Line Color'
      xmlns='http://www.w3.org/2000/svg'
      className={computeStyles(
        'ml-2 w-4 h-4 hover:text-neutral-gray text-neutral-dark-light',
        {
          condition:
            (Array.isArray(selected) && selected.length > 0) ||
            (!Array.isArray(selected) && selected !== undefined),
          valid: 'visible',
          unvalid: 'invisible',
        }
      )}
    >
      <line
        id='primary'
        x1='19'
        y1='19'
        x2='5'
        y2='5'
        stroke='currentColor'
        style={{
          fill: 'none',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      ></line>
      <line
        id='primary-2'
        data-name='primary'
        x1='19'
        y1='5'
        x2='5'
        y2='19'
        stroke='currentColor'
        style={{
          fill: 'none',

          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      ></line>
    </svg>
  );
};
