import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../../../layout/authLayout";
import uppistLogo from "../../../../../assets/logoImage.png";

export default function ConfirmDelete() {
  const navigate = useNavigate();

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/delete_account");
  };
  const handleCancel = () => {
    navigate("/settings/profile");
  };

  return (
    <AuthLayout>
      <section className="container delete_account">
      <img src={uppistLogo} alt="uppist Logo" className="setiings-logo" />
        <h1 className="delete_account_header">Delete Account?</h1>
        <h5 className="delete_account_header2">
          You are about to delete this account permanently
        </h5>
        <p className="delete_account_info2">
          All connected accounts and data will be deleted as well and this user
          will no longer be able to log in to the system using this account.
        </p>
        <p className="delete_account_info2">
          This action cannot be undone. Are you sure you want to continue?
        </p>

        <div className="confirm_delete-btn">
          <div>
            <button className="delete_cancel-btn" onClick={handleCancel}>
              NO
            </button>
          </div>
          <div>
            <button className="button__element yes-btn " onClick={handleNext}>
              YES
            </button>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}
