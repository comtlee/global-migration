import classNames from 'classnames';

interface InputFormProps {
  children?: React.ReactNode;
  error?: boolean;
  className?: string;
  row?: boolean;
  labelPosition?: 'left' | 'right' | 'top' | 'bottom';
}

const InputForm = ({
  children,
  error,
  row,
  className,
  labelPosition,
}: InputFormProps) => {
  const getLabelClass = () => {
    switch (labelPosition) {
      case 'left':
        return 'title-left';
      case 'right':
        return 'title-right';
      case 'bottom':
        return 'title-bottom';
      case 'top':
      default:
        return 'title-top';
    }
  };

  return (
    <div
      className={classNames('form-group', className, getLabelClass(), {
        error,
        row,
      })}
    >
      {children}
    </div>
  );
};

export default InputForm;
