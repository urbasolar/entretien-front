import { FC } from 'react';

import { Section } from '@components/section/section';
import { TModal } from '@components/modal/modal.types';

export const Modal: FC<TModal> = (props: TModal) => {
  const { children, isOpen, onClose, title, icon } = props;
  return (
    isOpen && (
      <div className='h-screen w-screen bg-black/50 absolute left-0 top-0 bottom-0 z-50 flex justify-center items-center'>
        <div className='w-3/4 bg-neutral-dark-gray rounded-lg'>
          <Section
            canBeClosed
            title={title}
            onClick={() => onClose(false)}
            icon={icon}
          >
            {children}
          </Section>
        </div>
      </div>
    )
  );
};
