import AuthLayout from "../../../layout/authLayout";
import { Link } from "react-router-dom";
import useTogglePassword from "../hooks/useTogglePassword";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/button";
import { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import googleIcon from "../../../assets/google.png";



export default function SignUp() {
  const [InputType, ToggleIcon] = useTogglePassword();
  const [value, setValue] = useState<string>()
  const [email, setEmail] = useState<string>("")


  console.log(value)

  return <AuthLayout>
   <section className="signup">
        <h1 className="signup__heading">Create Account</h1>
        <p className="signup__subHeading">Let's get you started </p>
        <form  className="form">
        <label>
            <h3>Full Name</h3>
            <Input type="email" placeholder="C.C Achukwu" />
          </label>

          <label>
            <h3>Email address</h3>
            <Input  type="email" placeholder="yourname@email.com" />
          </label>

          <label>
          <h3>Phone Number</h3>
          <PhoneInput
          placeholder="814 874 9415"
          defaultCountry="NG"
          international
          countryCallingCodeEditable={false}
          value={value}
          className="PhoneInput"
          onChange={setValue} />
          </label>

          <label className="password__label">
            <h3>Enter password</h3>
            <Input type={InputType} placeholder="Enter password" />
            <div className="eyeIcon">{ToggleIcon}</div>
          </label>

          <aside className="checkbox__label">
            <label>
              <Input type="checkbox" />
              <small>By signing up, I agree to the Terms of Service and Privacy Policy</small>
            </label>

          </aside>

          <Button text="sign up" onclick={(e) => e.preventDefault()} />
        </form>
        <section className="signup__options">
          <p>
            <span>Don't have an account?</span>
            <Link to={"signup"} className="createAccount">
              Create Account
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
    </AuthLayout>;
}