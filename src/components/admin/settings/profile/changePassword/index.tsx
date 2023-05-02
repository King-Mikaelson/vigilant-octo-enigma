import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../../../layout/authLayout";
import useTogglePassword from "../../../../../features/authentication/hooks/useTogglePassword";
import Input from "../../../../ui/Input";
import Button from "../../../../ui/button";
import { useState } from "react";

export default function ProfileChangePassword() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [InputType, ToggleIcon] = useTogglePassword();
  const [errorPassword, setErrorPassword] = useState<string>("");
  const handlePasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.currentTarget.value);
  };
  const handlePasswordValueFocus = () => {
    setErrorPassword("");
  };
  // Regex for checking if there is a letter or a number and no empty strings
  const Regex = /[a-zA-Z0-9]/;
  const validate = () => {
    if (
      Regex.test(passwordValue.trim()) === false &&
      passwordValue.trim().length === 0
    ) {
      setErrorPassword("*Password cannot blank");
    } else if (
      Regex.test(passwordValue.trim()) === false &&
      passwordValue.trim().length > 0
    ) {
      setErrorPassword("*Password must contain at least one letter or number");
    } else if (
      Regex.test(passwordValue.trim()) &&
      passwordValue.trim().length < 6
    ) {
      setErrorPassword("*Password must contain at least 6 characters");
    } else {
      setErrorPassword("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();

    if (
      errorPassword === "" &&
      passwordValue.trim().length > 0 &&
      Regex.test(passwordValue.trim())
    ) {
      // run Api call;
    }
  };
  const handleChangePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/settings/profile");
  };

  const handleCancel = () => {
    navigate("/settings/profile");
  };

  return (
    <AuthLayout>
      <section className="container">
        <section className="auth">
          <h1 className="auth__heading">Change Password</h1>

          <form onSubmit={handleSubmit} className="form mt-4">
            <label className="password__label">
              <h3>Current Password</h3>
              <Input
                type={InputType}
                passwordValue={passwordValue}
                handlePasswordValue={handlePasswordValue}
                handlePasswordValueFocus={handlePasswordValueFocus}
                errorPassword={errorPassword}
                placeholder="* * * * * * * * * *"
              />
              <div className="eyeIcon">{ToggleIcon}</div>
              {errorPassword ? (
                <p className="auth__error">{errorPassword}</p>
              ) : (
                " "
              )}
            </label>

            <aside className="p-link_box">
              <Link to="/input-email" className="p-link">
                Forgot Password?
              </Link>
            </aside>
            <label className="password__label">
              <h3>New Password</h3>
              <Input type={InputType} placeholder="* * * * * * * * * *" />
              <div className="eyeIcon">{ToggleIcon}</div>
            </label>

            <label className="password__label mb-3">
              <h3>Confirm Password</h3>
              <Input type={InputType} placeholder="* * * * * * * * * *" />
              <div className="eyeIcon">{ToggleIcon}</div>
            </label>

            <Button text="submit" onclick={(e) => handleChangePassword(e)} />

            <div className="cancel-btn-div">
              <button
                className="cancel-btn"
                type="submit"
                onClick={handleCancel}
                disabled
              >
                Cancel
              </button>
            </div>
          </form>
          {isModalOpen && (
            <div className="user-modal">
              <div className="modal-content">
                <p>Password Changed Successfully!</p>
                <button className="close-btn" onClick={handleModalClose}>
                  Okay
                </button>
              </div>
            </div>
          )}
        </section>
      </section>
    </AuthLayout>
  );
}