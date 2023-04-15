import AuthLayout from "../../../layout/authLayout";
import useTogglePassword from "../hooks/useTogglePassword";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/button";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import googleIcon from "../../../assets/google.png";
import Trademark from "../../../components/trademark/Trademark";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [InputType, ToggleIcon] = useTogglePassword();
  const [value, setValue] = useState<string>();
  const [fullName, setFullName] = useState<string>(" ");
  const [email, setEmail] = useState<string>(" ");
  const [password, setPassword] = useState<string>(" ");
  const [error, setError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  // This function code updates the state of the email input
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  // This function code updates the state of the name input
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.currentTarget.value);
  };

  // This function code updates the state of the password input
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  // This function code updates the state of the checkbox input
  const handleChecked = () => {
    setChecked(!checked);
  };

  // Regex for name,email and phone Validation
  const nameRegex = /[a-zA-Z]/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex = /[a-zA-Z0-9]/;

  // Function that validates the input
  const validate = () => {
    if (!nameRegex.test(fullName) && fullName.length === 0) {
      setError("*Full name must contain at least one letter");
    } else if (!nameRegex.test(fullName) && fullName.length > 0) {
      setError("*Full name must contain at least one letter");
    } else if (nameRegex.test(fullName) && fullName.length <= 4) {
      setError("*Full name must contain at least four characters");
    } else {
      setError("");
    }

    if (passwordRegex.test(password) === false && password.length === 0) {
      setPasswordError("*Password must contain at least one letter or number");
    } else if (passwordRegex.test(password) === false && password.length > 0) {
      setPasswordError("*Password must contain at least one letter or number");
    } else if (passwordRegex.test(password) && password.length <= 4) {
      setPasswordError("*Password must contain at least four characters");
    } else {
      setPasswordError("");
    }

    if (isValidPhoneNumber(`${value}`) === false) {
      setPhoneError("*Phone Number must be at least 10 digits");
    } else {
      setPhoneError("");
    }

    if (email.length === 0) {
      setEmailError("*Email is not valid");
    } else {
      setEmailError("");
    }
  };

  // This function runs on submit when a button in a form  is clicked
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();

    if (!emailRegex.test(email)) {
      setEmailError("*Email is not valid");
    } else {
      setEmailError("");
    }

    if (
      error === "" &&
      fullName.length > 0 &&
      nameRegex.test(fullName) &&
      emailRegex.test(email) &&
      password.length > 0 &&
      passwordRegex.test(password) &&
      passwordError === "" &&
      value &&
      phoneError === "" &&
      checked
    ) {
      // run Api call;
    }
  };

  // OnFocus code  is to remove the error warnings and red borders when the user clicks the input again
  const handleNameFocus = () => {
    setError("");
  };
  const handlePasswordFocus = () => {
    setPasswordError("");
  };
  const handleEmailFocus = () => {
    setEmailError("");
  };

  return (
    <AuthLayout>
      <section className="container">
        <section className="auth">
          <h1 className="auth__heading">Create Account</h1>
          <p className="auth__subHeading">Let's get you started </p>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <label>
              <h3>Full Name</h3>
              <Input
                fullName={fullName}
                handleName={handleName}
                type="name"
                placeholder="C.C Achukwu"
                handleNameFocus={handleNameFocus}
                error={error}
              />
              {error ? <p className="auth__error">{error}</p> : " "}
            </label>

            <label>
              <h3>Email address</h3>
              <Input
                type="email"
                email={email}
                handleEmail={handleEmail}
                handleEmailFocus={handleEmailFocus}
                placeholder="yourname@email.com"
                emailError={emailError}
              />
              {emailError ? <p className="auth__error">{emailError}</p> : " "}
            </label>

            <label>
              <h3>Phone Number</h3>
              <PhoneInput
                placeholder="814 874 9415"
                defaultCountry="NG"
                international
                countryCallingCodeEditable={false}
                value={value}
                className="PhoneInput input__element"
                onChange={setValue}
              />
              {phoneError ? <p className="auth__error">{phoneError}</p> : " "}
            </label>

            <label className="password__label">
              <h3>Enter password</h3>
              <Input
                type={InputType}
                placeholder="Enter password"
                password={password}
                handlePassword={handlePassword}
                handlePasswordFocus={handlePasswordFocus}
                passwordError={passwordError}
              />
              <div className="eyeIcon">{ToggleIcon}</div>
              {passwordError ? (
                <p className="auth__error">{passwordError}</p>
              ) : (
                " "
              )}
            </label>

            <aside className="checkbox__label">
              <label>
                <Input
                  type="checkbox"
                  checked={checked}
                  handleChecked={handleChecked}
                />
                <small>
                  By signing up, I agree to the
                  <span className="text__purple"> Terms of Service </span> and
                  <span className="text__purple"> Privacy Policy </span>
                </small>
              </label>
            </aside>

            <Button text="sign up" />
          </form>
          <section className="signup__options">
            <p>
              <span>Don't have an account?</span>
              <Link to={"/"} className="createAccount">
                Log In
              </Link>{" "}
            </p>
            <div className="or">
              <span className="line"></span>
              <h2>or</h2>
            </div>
            <Link to={"#"} className="google">
              <img src={googleIcon} alt="google" />
              Sign in with Google
            </Link>
          </section>
        </section>
        <Trademark />
      </section>
    </AuthLayout>
  );
}
