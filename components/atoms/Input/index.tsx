import { ChangeEvent } from 'react';
import classNames from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({
  type = 'text',
  value,
  onChange,
  className,
  ...rest
}: InputProps) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    className={classNames('form-control', className)}
    {...rest}
  />
);

export default Input;
