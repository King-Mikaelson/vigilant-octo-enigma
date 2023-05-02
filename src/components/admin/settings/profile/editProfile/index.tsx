import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import Input from "../../../../ui/Input";
import Button from "../../../../ui/button";

export default function EditProfile() {
  const navigate = useNavigate();
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

    if (isValidPhoneNumber(`${value}`) === false) {
      setPhoneError("*Phone Number must be at least 10 digits");
    } else {
      setPhoneError("");
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
  };

  const handleNameFocus = () => {
    setError("");
  };

  const handleBizNameFocus = () => {
    setError("");
  };

  const handleAddressFocus = () => {
    setError("");
  };

  const handleEmailFocus = () => {
    setEmailError("");
  };
  const handleBack = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/settings/profile");
  };
  const handleCancelEdit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/settings/profile");
  };

  return (
    <section className="container edit-prof">
      <section className="auth edit-prof">
        <h3 className="auth__heading edit-prof">
          <MdArrowBackIos className="edit-prof-icon" onClick={handleBack} />{" "}
          Edit Profile
        </h3>
        <form className="form edit-prof" onSubmit={(e) => handleSubmit(e)}>
          <aside className="form-items">
            <label>
              <h3>Full Name</h3>
              <div className="input-element">
                <Input
                  fullName={fullName}
                  handleName={handleName}
                  type="name"
                  placeholder="C.C Achukwu"
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
              <h3>Email address</h3>
              <div className="input-element">
                <Input
                  type="email"
                  email={email}
                  handleEmail={handleEmail}
                  handleEmailFocus={handleEmailFocus}
                  placeholder="yourname@email.com"
                  emailError={emailError}
                />
                {emailError ? (
                  <p className="auth__error edit-error">{emailError}</p>
                ) : (
                  " "
                )}
              </div>
            </label>

            <label>
              <h3>Phone Number</h3>
              <div className="input-element">
                <PhoneInput
                  placeholder="814 874 9415"
                  defaultCountry="NG"
                  international
                  countryCallingCodeEditable={false}
                  value={value}
                  className="PhoneInput input__element"
                  onChange={setValue}
                />
                {phoneError ? (
                  <p className="auth__error edit-error">{phoneError}</p>
                ) : (
                  " "
                )}
              </div>
            </label>

            <label>
              <h3>Business Name</h3>
              <div className="input-element">
                <Input
                  bizName={bizName}
                  handleBizName={handleBizName}
                  type="bizName"
                  placeholder="Enter name of business"
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

            <label>
              <h3>Business Address</h3>
              <div className="input-element">
                <Input
                  address={address}
                  handleAddress={handleAddress}
                  type="address"
                  placeholder="Enter a new address"
                  handleAddressFocus={handleAddressFocus}
                  error={error}
                />
                {addressError ? (
                  <p className="auth__error edit-error">{addressError}</p>
                ) : (
                  " "
                )}
              </div>
            </label>
          </aside>
          <Button text="Update" />
          <div className="cancel-btn-div">
            <button
              className="cancel-btn"
              type="submit"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}