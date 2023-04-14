

type InputProps = {
  type: any;
  placeholder?: string;
  id?: string;
  name?: string;
  fullName?: string;
  email?: string;
  password?: string;
  handleName?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmail?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword?: (e: React.ChangeEvent<HTMLInputElement>) => void;

};

export default function Input({
  type,
  placeholder,
  id,
  handleName,
  handleEmail,
  handlePassword,
  email,
  password,
  fullName,
  name,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      className="input__element"
      value={email || password || fullName}
      onChange={(e) => {handlePassword?.(e); handleEmail?.(e); handleName?.(e)}  }
    />
  );
}
