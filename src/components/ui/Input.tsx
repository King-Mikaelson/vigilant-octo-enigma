type InputProps = {
  type: any;
  placeholder?: string;
  id?: string;
  name?: string;
  fullName?: string;
  userName?: string;
  email?: string;
  bizName?: string;
  businessName?: string;
  businessAddress?: string;
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
  handleUserName?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBusinessName?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBusinessAddress?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBizName?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddress?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmail?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChecked?: () => void;
  handleBizNameFocus?: () => void;
  handleBusinessFocus?: () => void;
  handleUserNameFocus?: () => void;
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
  handleUserName,
  handleBizName,
  handleAddress,
  handleEmail,
  handlePassword,
  email,
  password,
  fullName,
  userName,
  businessName,
  businessAddress,
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
  handleUserNameFocus,
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
        userName ||
        address ||
        value ||
        passwordValue
      }
      onChange={(e) => {
        handlePassword?.(e);
        handleEmail?.(e);
        handleName?.(e);
        handleUserName?.(e);
        handleAddress?.(e);
        handleBizName?.(e);
        handleChecked?.();
        handleValue?.(e);
        handlePasswordValue?.(e);
      }}
      onFocus={() => {
        handleNameFocus?.();
        handleEmailFocus?.();
        handleUserNameFocus?.();
        handlePasswordFocus?.();
        handleValueFocus?.();
        handleAddressFocus?.();
        handleBizNameFocus?.();
        handlePasswordValueFocus?.();
      }}
    />
  );
}
