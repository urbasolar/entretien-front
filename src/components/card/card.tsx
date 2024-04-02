import { FC } from 'react';

import { TCard } from '@components/card/card.types';

export const Card: FC<TCard> = (props: TCard) => {
  const { children, className } = props;
  return (
    <div
      className={`bg-neutral-dark-black rounded-lg p-l w-full ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
};
