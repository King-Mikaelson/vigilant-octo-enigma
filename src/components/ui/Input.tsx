type InputProps = {
  type: any;
  placeholder?: string;
  id?: string;
  name?: string;
  fullName?: string;
  email?: string;
  password?: string;
  error?: string;
  value?: string;
  passwordValue?: string;
  passwordError?: string;
  emailError?: string;
  phoneError?: string;
  errorValue?: string;
  errorPassword?: string;
  checked?: boolean;
  handleName?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmail?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChecked?: () => void;
  handleNameFocus?: () => void;
  handleValueFocus?: () => void;
  handlePasswordValueFocus?: () => void;
  handlePasswordFocus?: () => void;
  handleEmailFocus?: () => void;
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
  value,
  passwordValue,
  name,
  handleNameFocus,
  handleEmailFocus,
  handlePasswordFocus,
  handleChecked,
  handleValue,
  handlePasswordValue,
  handleValueFocus,
  handlePasswordValueFocus,
  error,
  passwordError,
  emailError,
  checked,
  errorValue,
  errorPassword,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      className={
        error || passwordError || emailError || errorValue || errorPassword
          ? `input__error`
          : `input__element`
      }
      checked={checked}
      value={email || password || fullName || value || passwordValue}
      onChange={(e) => {
        handlePassword?.(e);
        handleEmail?.(e);
        handleName?.(e);
        handleChecked?.();
        handleValue?.(e);
        handlePasswordValue?.(e);
      }}
      onFocus={() => {
        handleNameFocus?.();
        handleEmailFocus?.();
        handlePasswordFocus?.();
        handleValueFocus?.();
        handlePasswordValueFocus?.();
      }}
    />
  );
}
