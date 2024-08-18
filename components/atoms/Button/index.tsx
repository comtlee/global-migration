import { ButtonProps } from './button';
import '@/styles/scss/import.scss';
import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

const Button = ({
  children,
  disabled,
  type = 'button',
  className,
  style,
  variant = 'primary',
  size,
  ...eventHandlers
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      disabled={disabled}
      className={classNames('button-common', variant, size, className)}
      style={style}
      {...eventHandlers}
    >
      {children}
    </button>
  );
};
export { Button };
