import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { Link } from "react-router-dom";
import Input from "../../../ui/Input";
import Button from "../../../ui/button";
import { MdArrowBackIos } from "react-icons/md";

export default function EditProfile() {
  const [value, setValue] = useState<string>();
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.currentTarget.value);
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

  const handleEmailFocus = () => {
    setEmailError("");
  };

  return (
    <section className="container edit-prof">
      <section className="auth edit-prof">
        <h3 className="auth__heading edit-prof">
          <MdArrowBackIos className="edit-prof-icon" /> Edit Profile
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
              </div>
              {error ? <p className="auth__error">{error}</p> : " "}
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
              </div>

              {emailError ? <p className="auth__error">{emailError}</p> : " "}
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
              </div>

              {phoneError ? <p className="auth__error">{phoneError}</p> : " "}
            </label>

            <label>
              <h3>Business Name</h3>
              <div className="input-element">
                {" "}
                <Input
                  fullName={fullName}
                  handleName={handleName}
                  type="name"
                  placeholder="C.C Achukwu"
                  handleNameFocus={handleNameFocus}
                  error={error}
                />
              </div>

              {error ? <p className="auth__error">{error}</p> : " "}
            </label>

            <label>
              <h3>Business Address</h3>
              <div className="input-element">
                <Input
                  fullName={fullName}
                  handleName={handleName}
                  type="name"
                  placeholder="C.C Achukwu"
                  handleNameFocus={handleNameFocus}
                  error={error}
                />
              </div>

              {error ? <p className="auth__error">{error}</p> : " "}
            </label>
          </aside>
          <Button text="Update" />
          <button className="cancel-btn" type="submit">
            Cancel
          </button>
        </form>
      </section>
    </section>
  );
}
