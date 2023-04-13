type InputProps = {
  type: any;
  placeholder?: string;
  id?: string;
  email?: string;
  handleEmail? : (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type,
  placeholder,
  id,
  email,
  handleEmail,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      className="input__element"
      value={email}
      onChange={(e) => handleEmail?.(e)}
    />
  );
}
