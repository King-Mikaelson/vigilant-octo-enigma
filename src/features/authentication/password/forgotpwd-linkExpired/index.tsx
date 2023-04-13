import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/button";
import AuthLayout from "../../../../layout/authLayout";

export default function LinkExpired() {
  const navigate = useNavigate();

  const btnActions = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/forgot-pwdlink");
  };
  return (
    <AuthLayout>
      <section className="container">
        <section className="auth">
          <h1 className="auth__heading">Link Expired</h1>
          <p className="auth__paragraph mt-2">
            Your link has expired, because you haven't used it. Reset password
            link expires in every 24 hours and can be used only once. You can
            create one by clicking the button below.
          </p>
          <form className="form">
            <Button
              text="Request password change"
              onclick={(e) => btnActions(e)}
            />

            <Link to="/" className="auth__links">
              Cancel
            </Link>
          </form>
        </section>
      </section>
    </AuthLayout>
  );
}
