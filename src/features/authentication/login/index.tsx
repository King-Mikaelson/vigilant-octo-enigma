import { Link } from "react-router-dom";
import useTogglePassword from "../hooks/useTogglePassword";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/button";
import AuthLayout from "../../../layout/authLayout";
import googleIcon from "../../../assets/google.png";

export default function Login() {
  //TOGGLING PASSWORD HIDE/SHOW
  const [InputType, ToggleIcon] = useTogglePassword();

  return (
    <AuthLayout>
      <section className="auth">
        <h1 className="auth__heading">Sign in to your account</h1>
        <p className="auth__paragraph">welcome back</p>
        <form className="form">
          <label>
            <h3>Email address / Phone number</h3>
            <Input type="email" placeholder="yourname@email.com/phone number" />
          </label>

          <label className="password__label">
            <h3>Enter password</h3>
            <Input type={InputType} placeholder="Enter password" />
            <div className="eyeIcon">{ToggleIcon}</div>
          </label>

          <aside className="checkbox__label">
            <label>
              <Input type="checkbox" />
              <small>Remember me</small>
            </label>

            <Link to={"/forgot-pwd"}>forgot password?</Link>
          </aside>

          <Button text="sign in" onclick={(e) => e.preventDefault()} />
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
    </AuthLayout>
  );
}
