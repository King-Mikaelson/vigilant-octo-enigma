type InputProps = {
  type: any;
  placeholder?: string;
  id?: string;
  name?: string;
  fullName?: string;
  email?: string;
  bizName?: string;
  address?: string;
  password?: string;
  error?: string;
  value?: string;
  passwordValue?: string;
  passwordError?: string;
  emailError?: string;
  phoneError?: string;
  bizNameError?: string;
  addressError?: string;
  errorValue?: string;
  errorPassword?: string;
  checked?: boolean;
  handleName?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBizName?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddress?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmail?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChecked?: () => void;
  handleBizNameFocus?: () => void;
  handleAddressFocus?: () => void;
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
  handleBizName,
  handleAddress,
  handleEmail,
  handlePassword,
  email,
  password,
  fullName,
  bizName,
  address,
  value,
  passwordValue,
  name,
  handleAddressFocus,
  handleBizNameFocus,
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
  bizNameError,
  addressError,
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
        error ||
        passwordError ||
        emailError ||
        bizNameError ||
        addressError ||
        errorValue ||
        errorPassword
          ? `input__error`
          : `input__element`
      }
      checked={checked}
      value={
        email ||
        password ||
        fullName ||
        bizName ||
        address ||
        value ||
        passwordValue
      }
      onChange={(e) => {
        handlePassword?.(e);
        handleEmail?.(e);
        handleName?.(e);
        handleAddress?.(e);
        handleBizName?.(e);
        handleChecked?.();
        handleValue?.(e);
        handlePasswordValue?.(e);
      }}
      onFocus={() => {
        handleNameFocus?.();
        handleEmailFocus?.();
        handlePasswordFocus?.();
        handleValueFocus?.();
        handleAddressFocus?.();
        handleBizNameFocus?.();
        handlePasswordValueFocus?.();
      }}
    />
  );
}
