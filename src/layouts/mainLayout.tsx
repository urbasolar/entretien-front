import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from '@/components';

export const Layout: FC = () => {
  return (
    <div
      id='page-container'
      className='flex bg-neutral-gray dark:bg-neutral-dark-black w-full'
    >
      <Navbar />
      <div id='body' className='w-full'>
        <Outlet />
      </div>
    </div>
  );
};
