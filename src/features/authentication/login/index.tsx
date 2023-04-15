import { Link } from "react-router-dom";
import useTogglePassword from "../hooks/useTogglePassword";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/button";
import AuthLayout from "../../../layout/authLayout";
import SignInOptions from "../../../components/signInOptions";
import Trademark from "../../../components/trademark/Trademark";

export default function Login() {
  //TOGGLING PASSWORD HIDE/SHOW
  const [InputType, ToggleIcon] = useTogglePassword();

  return (
    <AuthLayout>
      <section className="container">
        <section className="auth">
          <h1 className="auth__heading">Sign in to your Account</h1>
          <p className="auth__subHeading">welcome back</p>
          <form className="form">
            <label>
              <h3>Email address / Phone number</h3>
              <Input
                type="email"
                placeholder="yourname@email.com/phone number"
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
                <small>Remember me</small>
              </label>

              <Link to={"/input-email"}>forgot password?</Link>
            </aside>

            <Button text="sign in" onclick={(e) => e.preventDefault()} />
          </form>
          <SignInOptions />
        </section>
        <Trademark />
      </section>
    </AuthLayout>
  );
}
