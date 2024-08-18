export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'black' | 'white' | 'gray';
  size?: 'lg' | 'md' | 'xs';
  style?: React.CSSProperties;
}
