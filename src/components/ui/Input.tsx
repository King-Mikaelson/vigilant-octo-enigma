type InputProps = {
  type: any;
  placeholder?: string;
  id?: string;
};

export default function Input({ type, placeholder, id }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      className="input__element"
    />
  );
}
