import { faArrowRight } from '@fortawesome/pro-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import darkLogo from '@assets/Logo/logo-dark.svg';
import logo from '@assets/Logo/logo.svg';
import { navbarItems } from '@components/navbar/navbar.constants';
import { useNavbar } from '@components/navbar/navbar.hook';
import { ETheme } from '@shared/enums/index';
import { computeStyles } from '@utils/computeStyles';

import './navbar.css';

export const Navbar: FC = (): JSX.Element => {
  const { openNavbar, setOpenNavbar, themeMode } = useNavbar();

  return (
    <div
      id='page-container'
      className='flex bg-neutral-gray dark:bg-neutral-dark-black w-full'
    >
      <div
        id='navbar'
        className={computeStyles('navbar', {
          condition: openNavbar,
          valid: 'w-64',
          unvalid: 'w-20',
        })}
      >
        <div className='p-l flex justify-between'>
          {openNavbar && (
            <img
              src={themeMode === ETheme.dark ? logo : darkLogo}
              alt='logo'
              className='text-neutral-black dark:text-white'
            />
          )}
          <button
            type='button'
            className={computeStyles('navbar-button', {
              condition: openNavbar,
              valid: '',
              unvalid: 'w-full',
            })}
            onClick={() => setOpenNavbar(!openNavbar)}
          >
            <FontAwesomeIcon
              icon={openNavbar ? faArrowLeft : faArrowRight}
              className='text-neutral-black dark:text-white font-extrabold'
            />
          </button>
        </div>
        <nav className='p-l'>
          <ul>
            {navbarItems.map((item) => (
              <li key={item.text} className='py-xs'>
                <NavLink
                  end
                  to={item.path}
                  className={({ isActive }) =>
                    computeStyles('w-full block p-m hover:navbar-navlink', {
                      condition: isActive,
                      valid: 'navbar-navlink',
                      unvalid: '',
                    })
                  }
                >
                  {({ isActive }) => (
                    <div
                      className={computeStyles('hover:text-white', {
                        condition: openNavbar,
                        valid: '',
                        unvalid: 'text-center',
                      })}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={computeStyles('text-l font-bold', {
                          condition: isActive,
                          valid: 'text-neutral-black dark:text-white',
                          unvalid: 'text-icon',
                        })}
                      />
                      {openNavbar && (
                        <span
                          className={computeStyles('navbar-text', {
                            condition: openNavbar,
                            valid: 'pl-3',
                            unvalid: 'pl-0',
                          })}
                        >
                          {item.text}
                        </span>
                      )}
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id='body' className='w-full'>
        <Outlet />
      </div>
    </div>
  );
};
