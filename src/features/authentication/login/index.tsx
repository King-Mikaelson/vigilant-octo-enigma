import { Link } from "react-router-dom";
import useTogglePassword from "../hooks/useTogglePassword";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/button";
import AuthLayout from "../../../layout/authLayout";
import { useState } from "react";
import SignInOptions from "../../../components/authentication/signInOptions";
export default function Login() {
  //TOGGLING PASSWORD HIDE/SHOW
  const [InputType, ToggleIcon] = useTogglePassword();
  const [value, setValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const [errorValue, setErrorValue] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");

  // This function code updates the state of the input
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  // This function code updates the state of the input
  const handlePasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.currentTarget.value);
  };

  // Regex for checking if there is a letter or a number and no empty strings
  const Regex = /[a-zA-Z0-9]/;
  const validate = () => {
    if (!Regex.test(value.trim()) && value.trim().length === 0) {
      setErrorValue("*Input can not blank");
    } else if (!Regex.test(value.trim()) && value.trim().length > 0) {
      setErrorValue("*Input must contain at least one letter");
    } else if (Regex.test(value.trim()) && value.trim().length < 4) {
      setErrorValue("*Input must contain at least four characters");
    } else {
      setErrorValue("");
    }

    if (
      Regex.test(passwordValue.trim()) === false &&
      passwordValue.trim().length === 0
    ) {
      setErrorPassword("*Password cannot blank");
    } else if (
      Regex.test(passwordValue.trim()) === false &&
      passwordValue.trim().length > 0
    ) {
      setErrorPassword("*Password must contain at least one letter or number");
    } else if (
      Regex.test(passwordValue.trim()) &&
      passwordValue.trim().length < 4
    ) {
      setErrorPassword("*Password must contain at least four characters");
    } else {
      setErrorPassword("");
    }
  };

  // This function runs on submit when a button in a form  is clicked
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();

    if (
      errorPassword === "" &&
      passwordValue.trim().length > 0 &&
      Regex.test(passwordValue.trim()) &&
      errorValue === "" &&
      value.trim().length > 0 &&
      Regex.test(value.trim())
    ) {
      // run Api call;
    }
  };

  // OnFocus code  is to remove the error warnings and red borders when the user clicks the input again
  const handleValueFocus = () => {
    setErrorValue("");
  };
  const handlePasswordValueFocus = () => {
    setErrorPassword("");
  };

  return (
    <AuthLayout>
      <section className="container">
        <section className="auth">
          <h1 className="auth__heading">Sign in to your Account</h1>
          <p className="auth__subHeading">welcome back</p>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <label>
              <h3>Email address / Phone number</h3>
              <Input
                type="text"
                value={value}
                handleValue={handleValue}
                handleValueFocus={handleValueFocus}
                placeholder="yourname@email.com/phone number"
                errorValue={errorValue}
              />
              {errorValue ? <p className="auth__error">{errorValue}</p> : " "}
            </label>

            <label className="password__label">
              <h3>Enter password</h3>
              <Input
                type={InputType}
                passwordValue={passwordValue}
                handlePasswordValue={handlePasswordValue}
                handlePasswordValueFocus={handlePasswordValueFocus}
                errorPassword={errorPassword}
                placeholder="Enter password"
              />
              <div className="eyeIcon">{ToggleIcon}</div>
              {errorPassword ? (
                <p className="auth__error">{errorPassword}</p>
              ) : (
                " "
              )}
            </label>

            <aside className="checkbox__label">
              <label>
                <Input type="checkbox" />
                <small>Remember me</small>
              </label>

              <Link to={"/input-email"}>forgot password?</Link>
            </aside>

            <Button text="sign in" />
          </form>
          <SignInOptions />
        </section>
      </section>
    </AuthLayout>
  );
}
