import AuthLayout from "../../../layout/authLayout";
import useTogglePassword from "../hooks/useTogglePassword";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/button";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import googleIcon from "../../../assets/google.png";
import Trademark from "../../../components/trademark/Trademark";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [InputType, ToggleIcon] = useTogglePassword()
  const [value, setValue] = useState<string>()
  const [fullName, setFullName] = useState<string>(" ")
  const [email, setEmail] = useState<string>(" ")
  const [password, setPassword] = useState<string>(" ")

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  }

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.currentTarget.value);
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  }

  return (
    <AuthLayout>
      <section className="container">
        <section className="auth">
          <h1 className="auth__heading">Create Account</h1>
          <p className="auth__subHeading">Let's get you started </p>
          <form className="form">
            <label>
              <h3>Full Name</h3>
              <Input
                email={email}
                handleEmail={handleEmail}
                type="email"
                placeholder="C.C Achukwu"
              />
            </label>

            <label>
              <h3>Email address</h3>
              <Input type="email" placeholder="yourname@email.com" />
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
            </label>

            <label className="password__label">
              <h3>Enter password</h3>
              <Input type={InputType} placeholder="Enter password" />
              <div className="eyeIcon">{ToggleIcon}</div>
            </label>

            <aside className="checkbox__label">
              <label>
                <Input type="checkbox" />
                <small>
                  By signing up, I agree to the
                  <span className="text__purple"> Terms of Service </span> and
                  <span className="text__purple"> Privacy Policy </span>
                </small>
              </label>
            </aside>

            <Button text="sign up" onclick={(e) => e.preventDefault()} />
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
