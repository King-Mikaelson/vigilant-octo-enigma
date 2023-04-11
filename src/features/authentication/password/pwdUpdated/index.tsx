import Button from "../../../../components/ui/button";
import AuthLayout from "../../../../layout/authLayout";
import { useNavigate } from "react-router-dom";

export default function PwdUpdated() {
  const navigate = useNavigate();
  const btnActions = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <AuthLayout>
      <section className="auth">
        <h1 className="auth__heading  mt-4rem">Password Updated</h1>
        <p className="auth__paragraph mt-2">Your password has been updated</p>
        <form className="form">
          <Button text="sign in" onclick={(e) => btnActions(e)} />
        </form>
      </section>
    </AuthLayout>
  );
}
