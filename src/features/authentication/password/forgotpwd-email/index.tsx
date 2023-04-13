import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/button";
import AuthLayout from "../../../../layout/authLayout";
import Input from "../../../../components/ui/Input";

export default function ForgotPwd() {
  const navigate = useNavigate();

  const btnActions = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/forgot-pwdlink");
  };
  return (
    <AuthLayout>
      <section className="auth">
        <h1 className="auth__heading">Forgot password?</h1>
        <p className="auth__subHeading">Don’t worry. We can help.</p>

        <form className="form">
          <label className="mb-3">
            <h3>Email address</h3>
            <Input type="email" placeholder="yourname@email.com" />
            <span className="span">Please enter your registered email</span>
          </label>

          <Button
            text="Request password change"
            onclick={(e) => btnActions(e)}
          />

          <Link to="/" className="auth__links">
            Cancel
          </Link>
        </form>
      </section>
    </AuthLayout>
  );
}
