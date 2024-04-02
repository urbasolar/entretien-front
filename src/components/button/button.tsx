import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import { TButton } from '@components/button/button.types';

export const Button: FC<TButton> = (props: TButton) => {
  const {
    text,
    className,
    icon,
    variant = 'primary',
    disabled,
    size = 'full',
  } = props;

  const bgColor = {
    primary: 'bg-primary',
    white: 'bg-white',
    success: 'bg-success',
    warning: 'bg-warning',
    danger: 'bg-danger',
  };

  const btnSize = {
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64',
    full: 'w-full',
  };

  return (
    <button
      {...props}
      className={`${className || ''} ${
        bgColor[variant]
      } hover:bg-primary-800 text-white font-bold py-2 px-4 w- rounded-lg ${
        btnSize[size]
      } disabled:bg-neutral-dark-light`}
    >
      <div className='flex gap-2 justify-center items-center'>
        {icon && (
          <FontAwesomeIcon
            icon={icon.icon}
            color={icon.color}
            size={icon.size}
          />
        )}
        <p
          className={`${
            (disabled && 'text-neutral-dark-gray') ||
            ((variant === 'warning' || variant === 'white') && 'text-black')
          }`}
        >
          {text ?? 'Button'}
        </p>
      </div>
    </button>
  );
};
