import { Link, useNavigate } from "react-router-dom";
import useTogglePassword from "../hooks/useTogglePassword";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/button";
import AuthLayout from "../../../layout/authLayout";
import { useContext, useState } from "react";
import SignInOptions from "../../../components/authentication/signInOptions";
import AppContext from "../../../context/AppContext";
import AuthContext from "../context/AuthContext";
export default function Login() {
  //TOGGLING PASSWORD HIDE/SHOW
  const [InputType, ToggleIcon] = useTogglePassword();
  const [value, setValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const [errorValue, setErrorValue] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");

  const { loginUser, loading } = useContext(AuthContext);

  const navigate = useNavigate();
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
      loginUser?.(value, passwordValue);
    }
  };

  // OnFocus code  is to remove the error warnings and red borders when the user clicks the input again
  const handleValueFocus = () => {
    setErrorValue("");
  };
  const handlePasswordValueFocus = () => {
    setErrorPassword("");
  };

  //Login Option from context
  const { loginOption, setLoginOption } = useContext(AppContext);
  //Active Option
  const activeOption = {
    color: "#332F32",
  };

  //disabled button state
  const disabled = value === "" || passwordValue === "";

  return (
    <AuthLayout>
      <section className="container">
        <section className="auth">
          <h1 className="auth__heading">Log into your Account</h1>
          <p className="auth__subHeading">Welcome Back</p>
          <aside className="auth__loginSwitch">
            <div className="options">
              <span
                onClick={() => setLoginOption?.("email")}
                style={loginOption === "email" ? activeOption : undefined}
              >
                Email
              </span>
              <span
                onClick={() => setLoginOption?.("username")}
                style={loginOption === "username" ? activeOption : undefined}
              >
                Username
              </span>
            </div>
            <span
              className={
                loginOption === "email" ? "slider" : "slider selectedUsername"
              }
            ></span>
          </aside>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <label>
              <h3>{loginOption === "email" ? "Email address" : "Username"}</h3>
              <Input
                type="text"
                value={value}
                handleValue={handleValue}
                handleValueFocus={handleValueFocus}
                placeholder={
                  loginOption === "email"
                    ? "yourname@email.com/phone number"
                    : "username"
                }
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
                <Input type="checkbox" checked />
                <small>Remember me</small>
              </label>

              <Link to={"/input-email"}>Forgot Password?</Link>
            </aside>
            {disabled ? (
              <button className="button__element disabled">log in</button>
            ) : (
              <Button text={loading ? "please wait" : "log in"} />
            )}
          </form>
          <SignInOptions />
        </section>
      </section>
    </AuthLayout>
  );
}
