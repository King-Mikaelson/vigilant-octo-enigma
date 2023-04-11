import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/button";
import AuthLayout from "../../../../layout/authLayout";
import useTogglePassword from "../../hooks/useTogglePassword";

export default function ChangePassword() {
  const navigate = useNavigate();

  const btnActions = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/pwd-updated");
  };
  //TOGGLING PASSWORD HIDE/SHOW
  const [InputType, ToggleIcon] = useTogglePassword();
  return (
    <AuthLayout>
      <section className="auth">
        <h1 className="auth__heading mt-4rem">Change password</h1>

        <form className="form mt-4">
          <label className="password__label">
            <h3>New password</h3>
            <Input type={InputType} placeholder="Enter new password" />
            <div className="eyeIcon">{ToggleIcon}</div>
          </label>

          <label className="password__label mb-3">
            <h3>Confirm password</h3>
            <Input type={InputType} placeholder="Confirm new password" />
            <div className="eyeIcon">{ToggleIcon}</div>
          </label>

          <Button text="submit" onclick={(e) => btnActions(e)} />

          <Link to="/" className="auth__links">
            Cancel
          </Link>
        </form>
      </section>
    </AuthLayout>
  );
}
