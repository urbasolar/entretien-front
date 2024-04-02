import { toggleDarkMode } from '@utils/darkMode';

export const OverviewPage = () => {
  return (
    <div className='flex flex-col center-element dark:text-white text-neutral-dark-black font-bold'>
      <p>Overview</p>
      <button onClick={toggleDarkMode}>clic pour changer le theme</button>
    </div>
  );
};
