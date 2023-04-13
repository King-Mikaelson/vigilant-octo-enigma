import { Link } from "react-router-dom";
import AuthLayout from "../../../../layout/authLayout";

export default function LinkSent() {
  return (
    <AuthLayout>
      <section className="auth">
        <h1 className="auth__heading">Forgot password?</h1>
        <p className="auth__subHeading">Don’t worry. We can help.</p>
        <p className="auth__paragraph">
          You will receive an email with a link to reset your password. Please
          check your inbox.
        </p>
        <Link to={"/forgot-pwdlink-resent"} className="auth__links">
          Resend email link
        </Link>
        <Link to={"/input-email"} className="auth__links">
          Change email address
        </Link>
      </section>
    </AuthLayout>
  );
}
