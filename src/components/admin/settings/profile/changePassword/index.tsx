import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../../../layout/authLayout";
import useTogglePassword from "../../../../../features/authentication/hooks/useTogglePassword";
import Input from "../../../../ui/Input";
import Button from "../../../../ui/button";
import { useState } from "react";
import uppistLogo from "../../../../../assets/logoImage.png";

export default function ProfileChangePassword() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [InputType, ToggleIcon] = useTogglePassword();

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
  const handleChangePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const handlePasswordFocus = () => {
    setPasswordError("");
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/settings/profile");
  };

  const handleCancel = () => {
    navigate("/settings/profile");
  };

  const disabledBtn = password === "";

  return (
    <AuthLayout>
      <section className="container">
      <img src={uppistLogo} alt="uppist Logo" className="setiings-logo" />
        <section className="auth">
          <h1 className="auth__heading">Change Password</h1>

          <form onSubmit={handleSubmit} className="form mt-4">
            <label className="password__label">
              <h3>Current Password</h3>
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

            <aside className="p-link_box">
              <Link to="/input-email" className="p-link">
                Forgot Password?
              </Link>
            </aside>
            <label className="password__label">
              <h3>New Password</h3>
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

            <label className="password__label mb-3">
              <h3>Confirm Password</h3>
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

            {disabledBtn ? (
              <button className="button__element disabled">Submit</button>
            ) : (
              <Button text="Submit" onclick={(e) => handleChangePassword(e)} />
            )}

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
