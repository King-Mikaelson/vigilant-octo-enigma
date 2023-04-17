import { Link } from "react-router-dom";
import AuthLayout from "../../../../layout/authLayout";

export default function LinkResent() {
  return (
    <AuthLayout>
      <section className="container">
        <section className="auth">
          <h1 className="auth__heading">Forgot password?</h1>
          <p className="auth__subHeading">Don’t worry. We can help.</p>
          <p className="auth__paragraph">
            The email has been resent. You will receive an email with a link to
            reset your password.
          </p>
          <Link to={"#"} className="auth__links">
            Resend email link
          </Link>
          <Link to={"/input-email"} className="auth__links">
            Change email address
          </Link>
        </section>
      </section>
    </AuthLayout>
  );
}
