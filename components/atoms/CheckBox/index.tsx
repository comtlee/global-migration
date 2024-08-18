interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Checkbox = ({ id, checked, onChange, label }: CheckboxProps) => {
  return (
    <div className='checkbox-group'>
      <label className='check-box' htmlFor={id}>
        <input
          type='checkbox'
          className='check-item'
          id={id}
          checked={checked}
          onChange={onChange}
          aria-checked={checked}
          aria-label={label}
        />
        <span className='check-icon'>
          <span className='ic-check'></span>
        </span>
        {label && <span className='checkbox-label'>{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
