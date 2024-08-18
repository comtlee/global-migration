interface InputMessageProps {
  message: string;
}

const InputMessage = ({ message }: InputMessageProps) => {
  return <p className='message'>{message}</p>;
};

export default InputMessage;
