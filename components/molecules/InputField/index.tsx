'use client';

import classNames from 'classnames';
import InputForm from '@/components/atoms/InputForm';
import Label from '@/components/molecules/InputField/Label';
import Input from '@/components/atoms/Input';
import DeleteIcon from '@/components/atoms/icons/DeleteIcon';
import InputMessage from '@/components/atoms/InputMessage';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
  limit?: number;
  row?: boolean;
  labelPosition?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
  message?: string;
  required?: boolean;
  id: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  id,
  required = false,
  error = false,
  limit = 20,
  onChange,
  value = '',
  message,
  className,
  row = false,
  labelPosition = 'top',
  ...rest
}: InputFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleClickDeleteIcon = () => {
    if (onChange) {
      onChange({
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <InputForm
      className={classNames('input-type-text', className)}
      error={error}
      labelPosition={labelPosition}
      row={row}
    >
      <Label htmlFor={id} text={label} required={required} />
      <div className='input-group'>
        <Input
          id={id}
          value={value}
          onChange={handleChange}
          maxLength={limit}
          {...rest}
        />
        {value && (
          <DeleteIcon
            className='input-group__append'
            onClick={handleClickDeleteIcon}
          />
        )}
      </div>
      {message && <InputMessage message={message} />}
    </InputForm>
  );
};

export default InputField;
