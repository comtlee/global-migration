import LabelRequired from '@/components/atoms/Label/LabelRequired';

interface LabelProps {
  htmlFor: string;
  text: string;
  required?: boolean;
}

const Label = ({ htmlFor, text, required = false }: LabelProps) => (
  <label className='title' htmlFor={htmlFor}>
    {text}
    <LabelRequired required={required} />
  </label>
);

export default Label;
