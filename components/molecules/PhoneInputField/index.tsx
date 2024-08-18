import { useState } from 'react';
import classNames from 'classnames';

import Input from '@/components/atoms/Input';
import InputForm from '@/components/atoms/InputForm';
import InputMessage from '@/components/atoms/InputMessage';
import Label from '@/components/molecules/InputField/Label';
import DeleteIcon from '@/components/atoms/icons/DeleteIcon';

interface PhoneInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  error?: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  countryNumber?: string | Number;
  message?: string;
}

const PhoneInputField = ({
  className,
  label,
  required = false,
  error = false,
  countryNumber = '',
  message,
  onChange,
  value = '',
  ...rest
}: PhoneInputFieldProps) => {
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
      className={classNames('input-type-phone', className)}
      error={error}
    >
      <Label htmlFor='phone' text={label} required={required} />
      <div className='input-group'>
        <div className='input-group__add'>
          {countryNumber && `${countryNumber} |`}
        </div>
        <Input id='phone' value={value} onChange={handleChange} {...rest} />
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

export default PhoneInputField;
