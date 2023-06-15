import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../../../layout/authLayout";
import { useState } from "react";
import Input from "../../../../ui/Input";
import Button from "../../../../ui/button";
import uppistLogo from "../../../../../assets/logoImage.png";

export default function MigrateStore() {
  const navigate = useNavigate();
  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/delete_account");
  };
  const handleCancel = () => {
    navigate("/settings/profile");
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState<string>();
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bizName, setBizName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [bizNameError, setBizNameError] = useState<string>("");
  const [addressError, setAddressError] = useState<string>("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.currentTarget.value);
  };

  const handleBizName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBizName(e.currentTarget.value);
  };

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value);
  };
  const nameRegex = /[a-zA-Z]/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const validate = () => {
    if (!nameRegex.test(fullName.trim()) && fullName.trim().length === 0) {
      setError("*Full name can not blank");
    } else if (!nameRegex.test(fullName.trim()) && fullName.trim().length > 0) {
      setError("*Full name must contain at least one letter");
    } else if (nameRegex.test(fullName.trim()) && fullName.trim().length < 4) {
      setError("*Full name must contain at least four characters");
    } else {
      setError("");
    }

    if (!nameRegex.test(bizName.trim()) && bizName.trim().length === 0) {
      setBizNameError("*Please enter your business name!");
    } else if (!nameRegex.test(bizName.trim()) && bizName.trim().length > 0) {
      setBizNameError("*Business name must contain at least 1 letter!");
    } else if (nameRegex.test(bizName.trim()) && bizName.trim().length < 4) {
      setBizNameError("*Business name must contain at least 4 characters!");
    } else {
      setBizNameError("");
    }

    if (!nameRegex.test(address.trim()) && address.trim().length === 0) {
      setAddressError("*Please enter a valid address!");
    } else if (!nameRegex.test(address.trim()) && address.trim().length > 0) {
      setAddressError("*Address must contain at least 1 letter!");
    } else if (nameRegex.test(address.trim()) && address.trim().length < 6) {
      setAddressError("*Address must contain at least 6 characters!");
    } else {
      setAddressError("");
    }

    if (!emailRegex.test(email.trim()) && email.trim().length === 0) {
      setEmailError("*Email can not be blank");
    } else if (!emailRegex.test(email.trim()) && email.trim().length > 0) {
      setEmailError("*Email is not valid");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();
    setIsModalOpen(true);
  };

  const handleNameFocus = () => {
    setError("");
  };

  const handleBizNameFocus = () => {
    setError("");
  };

  const handleEmailFocus = () => {
    setEmailError("");
  };
  const handleBack = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/settings/profile");
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/settings/profile");
  };
  const disabledBtn = fullName === "" || bizName === "" || email === "";

  return (
    <AuthLayout>
      <section className="container migrate-store">
      <img src={uppistLogo} alt="uppist Logo" className="setiings-logo" />
        <section className="auth migrate-store">
          <h3 className="header-text1">Migrate to a multiple store account</h3>
          <p className="header-text2">
            To migrate to a multiple store account, add a store by inputting the
            store details and then add a store admin.
          </p>
          <form className="form edit-prof" onSubmit={(e) => handleSubmit(e)}>
            <aside className="form-items">
              <label>
                <h3>Store Name</h3>
                <div className="input-element">
                  <Input
                    fullName={fullName}
                    handleName={handleName}
                    type="name"
                    placeholder="store name"
                    handleNameFocus={handleNameFocus}
                    error={error}
                  />
                  {error ? (
                    <p className="auth__error edit-error">{error}</p>
                  ) : (
                    " "
                  )}
                </div>
              </label>
              <label>
                <h3>Store Location</h3>
                <div className="input-element">
                  <Input
                    bizName={bizName}
                    handleBizName={handleBizName}
                    type="bizName"
                    placeholder="Store location"
                    handleBizNameFocus={handleBizNameFocus}
                    error={error}
                  />
                  {bizNameError ? (
                    <p className="auth__error edit-error">{bizNameError}</p>
                  ) : (
                    " "
                  )}
                </div>
              </label>
              <p className="add-admin">
                Add an admin for this store by inputting their email address and
                then select a role, a link would be sent to them to create an
                account.
              </p>
              <label>
                <h3>Email Address</h3>
                <div className="input-element">
                  <Input
                    type="email"
                    email={email}
                    handleEmail={handleEmail}
                    handleEmailFocus={handleEmailFocus}
                    placeholder="Admin's email address"
                    emailError={emailError}
                  />
                  {emailError ? (
                    <p className="auth__error edit-error">{emailError}</p>
                  ) : (
                    " "
                  )}
                </div>
              </label>
              <div className="select-role">
                <label htmlFor="role">Role </label>
                <select id="role">
                  <option value="roles">Add role</option>
                  <option value="role1">Waiter</option>
                  <option value="role2">Branch Manager</option>
                  <option value="role3">Admin</option>
                </select>
              </div>
            </aside>
            {disabledBtn ? (
              <button className="button__element disabled">Migrate</button>
            ) : (
              <Button text="Migrate" />
            )}
            <div className="cancel-btn-div">
              <button className="cancel-btn" type="submit" onClick={handleBack}>
                Go Back
              </button>
            </div>
          </form>
          {isModalOpen && (
            <div className="user-modal">
              <div className="modal-content">
                <p>Your account has been successfully migrated!</p>
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
