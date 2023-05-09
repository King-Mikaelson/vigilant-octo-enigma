import AuthLayout from "../../../layout/authLayout";
import useTogglePassword from "../hooks/useTogglePassword";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/button";
import { useState } from "react";
import "react-phone-number-input/style.css";
import progressBar2 from "../../../assets/singleStoreProg2.png";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp2() {
  const [InputType, ToggleIcon] = useTogglePassword();
  const [businessName, setBusinessName] = useState<string>("");
  const [businessAddress, setBusinessAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const navigate = useNavigate();

  // This function code updates the state of the business name input
  const handleBusinessName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessName(e.currentTarget.value);
  };

  // This function code updates the state of the name input
  const handleBusinessAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessAddress(e.currentTarget.value);
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
  const businessNameRegex = /[a-zA-Z]/;
  const buinessAddressRegex = /[a-zA-Z]/;
  const passwordRegex = /[a-zA-Z0-9]/;

  // Function that validates the input
  const validate = () => {
    if (
      !businessNameRegex.test(businessName.trim()) &&
      businessName.trim().length === 0
    ) {
      setError("*Full name can not blank");
    } else if (
      !businessNameRegex.test(businessName.trim()) &&
      businessName.trim().length > 0
    ) {
      setError("*Full name must contain at least one letter");
    } else if (
      businessNameRegex.test(businessName.trim()) &&
      businessName.trim().length < 2
    ) {
      setError("*Business name must contain at least 2 characters");
    } else {
      setError("");
    }

    if (
      passwordRegex.test(password.trim()) === false &&
      password.trim().length === 0
    ) {
      setPasswordError("*Password can not blank");
    } else if (
      passwordRegex.test(password.trim()) === false &&
      password.trim().length > 0
    ) {
      setPasswordError("*Password must contain at least one letter or number");
    } else if (
      passwordRegex.test(password.trim()) &&
      password.trim().length < 4
    ) {
      setPasswordError("*Password must contain at least four characters");
    } else {
      setPasswordError("");
    }
  };

  // This function runs on submit when a button in a form  is clicked
  const handleDefault = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleSubmit = () => {
    validate();

    if (
      error === "" &&
      businessName.trim().length > 0 &&
      businessNameRegex.test(businessName) &&
      password.trim().length > 0 &&
      passwordRegex.test(password) &&
      passwordError === "" &&
      checked
    ) {
      navigate("/signup2");
    }
  };

  // OnFocus code  is to remove the error warnings and red borders when the user clicks the input again
  const handleBusinessFocus = () => {
    setError("");
  };
  const handlePasswordFocus = () => {
    setPasswordError("");
  };

  //Sign up button disabled
  const disabledBtn =
    businessName === "" || businessAddress === "" || password === "";

  console.log(businessName, businessAddress, password);

  return (
    <AuthLayout>
      <section className="container">
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <img src={progressBar2} alt="progress" />
        </div>
        <section className="auth">
          <p className="auth__changeAcc">
            <span>Create account as a single store</span>
            <Link to={"/"} className="changeAccount">
              Change
            </Link>
          </p>
          <h1 className="auth__heading">Create Account</h1>
          <p className="auth__subHeading">Let's get you started </p>
          <form className="form" onSubmit={(e) => handleDefault(e)}>
            <aside className="grid">
              <div className="input__container">
                <h3>Business Name</h3>
                <Input
                  businessName={businessName}
                  handleBusinessName={handleBusinessName}
                  type="name"
                  placeholder="your business name"
                  handleBusinessFocus={handleBusinessFocus}
                  error={error}
                />
                {error ? <p className="auth__error">{error}</p> : " "}
              </div>

              <div className="input__container">
                <h3>Business Address</h3>
                <Input
                  businessAddress={businessAddress}
                  handleBusinessAddress={handleBusinessAddress}
                  type="name"
                  placeholder="your business address"
                  error={error}
                />
                {error ? <p className="auth__error">{error}</p> : " "}
              </div>

              {/* <div className="input__container">
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
              </div> */}

              {/* <div className="input__container">
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
              </div> */}

              <div className="password__label input__container">
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
              </div>

              <aside className="checkbox__label">
                <div>
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
                </div>
              </aside>
            </aside>

            <aside className="auth__btns">
              <Button text="go back" onclick={() => navigate(-1)} />
              {disabledBtn ? (
                <button className="button__element disabled">sign up</button>
              ) : (
                <Button text="sign up" onclick={() => navigate("/admin")} />
              )}
            </aside>
          </form>
          <section className="signup__options">
            <p>
              <span>Already a user?</span>
              <Link to={"/login"} className="createAccount">
                Log In
              </Link>{" "}
            </p>
          </section>
        </section>
      </section>
    </AuthLayout>
  );
}
