import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../../../layout/authLayout";
import useTogglePassword from "../../../../../features/authentication/hooks/useTogglePassword";
import Input from "../../../../ui/Input";
import Button from "../../../../ui/button";
import { useState } from "react";
import uppistLogo from "../../../../../assets/logoImage.png";


export default function DeleteAccount() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [InputType, ToggleIcon] = useTogglePassword();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();

    if (
      password.trim().length > 0 &&
      passwordRegex.test(password) &&
      passwordError === ""
    ) {
      // run Api call;
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  const handleBack = () => {
    navigate("/confirm_delete_account");
  };

  const handleDeleteAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const handlePasswordFocus = () => {
    setPasswordError("");
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const passwordRegex = /[a-zA-Z0-9]/;
  const validate = () => {
    if (
      passwordRegex.test(password.trim()) === false &&
      password.trim().length === 0
    ) {
      setPasswordError("*Password can not blank");
    } else if (
      passwordRegex.test(password.trim()) === false &&
      password.trim().length > 0
    ) {
      setPasswordError("*Password must contain at least one letter or number");
    } else if (
      passwordRegex.test(password.trim()) &&
      password.trim().length < 4
    ) {
      setPasswordError("*Password must contain at least four characters");
    } else {
      setPasswordError("");
    }
  };

  const disabledBtn = password === "";
  return (
    <AuthLayout>
      <section className="container delete_account">
      <img src={uppistLogo} alt="uppist Logo" className="setiings-logo" />
        <h1 className="delete_account_header">Delete Account?</h1>
        <h5 className="delete_account_header2">
          You are about to delete this account permanently
        </h5>
        <p className="delete_account_info">
          To delete your account, please enter your password in the space
          provided below:
        </p>
        <form onSubmit={handleSubmit} className="form mt-4">
          <label className="password__label del-label">
            <h3>Enter your password</h3>
            <Input
              type={InputType}
              password={password}
              handlePassword={handlePassword}
              handlePasswordFocus={handlePasswordFocus}
              passwordError={passwordError}
              placeholder="* * * * * * * * * *"
            />
            <div className="eyeIcon">{ToggleIcon}</div>
            {passwordError ? (
              <p className="auth__error">{passwordError}</p>
            ) : (
              " "
            )}
          </label>
          <div className="delbtn-container">
            <div className="cancel-btn-div">
              <button
                className="delete_cancel-btn"
                type="submit"
                onClick={handleBack}
              >
                Go Back
              </button>
            </div>

            <div>
              {disabledBtn ? (
                <button className="button__element disabled">
                  Delete Account
                </button>
              ) : (
                <Button
                  text="Delete Account"
                  onclick={(e) => handleDeleteAccount(e)}
                />
              )}
            </div>

            <div className="cancel-btn-div1">
              <button
                className="delete_cancel-btn1"
                type="submit"
                onClick={handleBack}
              >
                Go Back
              </button>
            </div>
          </div>
        </form>

        {isModalOpen && (
          <div className="user-modal">
            <div className="modal-content">
              <p>Account deleted successfully!</p>
              <button className="close-btn" onClick={handleModalClose}>
                Okay
              </button>
            </div>
          </div>
        )}
      </section>
    </AuthLayout>
  );
}
