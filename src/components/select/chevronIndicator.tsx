import { computeStyles } from '@utils/computeStyles';

export const ChevronIndicator = (props: { isOpen: boolean }) => {
  const { isOpen } = props;
  return (
    <svg
      className={computeStyles('ml-2 w-4 h-4 text-neutral-gray', {
        condition: isOpen,
        valid: 'rotate-180',
      })}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M19 9l-7 7-7-7'
      />
    </svg>
  );
};
