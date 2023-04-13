import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/button";
import AuthLayout from "../../../../layout/authLayout";

export default function LinkExpired() {
  const navigate = useNavigate();

  const btnActions = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/forgot-pwdlink-resent");
  };
  //TOGGLING PASSWORD HIDE/SHOW
  return (
    <AuthLayout>
      <section className="auth">
        <h1 className="auth__heading mt-4rem">Link Expired!</h1>

        <form className="form mt-4">
          <p className="auth__paragraph">
            Your link has expired, because you haven't used it. Reset password
            link expires in every 24 hours and can be used only once. You can
            create one by clicking the button below.
          </p>
          <Button text="resend another link" onclick={(e) => btnActions(e)} />

          <Link to="/" className="auth__links">
            Cancel
          </Link>
        </form>
      </section>
    </AuthLayout>
  );
}
