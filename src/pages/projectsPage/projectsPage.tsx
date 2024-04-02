import { toggleDarkMode } from '@utils/darkMode';

export const ProjectsPage = () => {
  return (
    <div className='flex flex-col center-element dark:text-white text-neutral-dark-black font-bold'>
      <p>Tous les projets</p>
      <button onClick={toggleDarkMode}>clic pour changer le theme</button>
    </div>
  );
};
