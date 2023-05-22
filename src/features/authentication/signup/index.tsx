import AuthLayout from "../../../layout/authLayout";
import useTogglePassword from "../hooks/useTogglePassword";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/button";
import { useEffect, useState, useContext } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import progressBar1 from "../../../assets/singleStoreProg1.png";
import progressBar2 from "../../../assets/progressBar2.png";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../features/authentication/context/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormOne = () => {
  interface Values {
    email?: string;
    userName?: string;
    fullName?: string;
  }

  const initialValues: Values = {
    email: "",
    userName: "",
    fullName: "",
  };

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email().required("*email is required"),
    userName: Yup.string()
      .required("*username is Required")
      .min(3, "*username is too short - should be 3 chars minimum"),
    fullName: Yup.string()
      .required("*fullName is Required")
      .min(7, "*fullname is too short - should be 7 chars minimum"),
  });

  const submitForm = (values: Values) => {
    console.log(values.email)
    console.log(values.userName)
    console.log(values.fullName)
    setSingleStoreState?.("two");
  };

  const { setSingleStoreState } = useContext(AuthContext);


  return (
    <AuthLayout>
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={SignInSchema}
          onSubmit={submitForm}
        >
          {(formik: {
            errors: any;
            touched: any;
            isValid: any;
            dirty: any;
          }) => {
            const { errors, touched, isValid} = formik;
            return (
              <section className="container">
                <div style={{ textAlign: "center", marginTop: "4rem" }}>
                  <img src={progressBar1} alt="progress" />
                </div>
                <section className="auth">
                  <p className="auth__changeAcc">
                    <span>Create account as a multiple store</span>
                    <Link to={"/"} className="changeAccount">
                      Change
                    </Link>
                  </p>
                  <h1 className="auth__heading">Create Account</h1>
                  <p className="auth__subHeading">Let's get you started </p>
                  <Form className="form">
                    <aside className="grid">
                      <div className="input__container">
                        <label htmlFor="userName">Full Name</label>
                        <Field
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="fullname"
                          className={
                            errors.email && touched.email
                              ? "input__error"
                              : `input__element`
                          }
                        />
                        <ErrorMessage
                          name="fullName"
                          component="span"
                          className="auth__error"
                        />
                      </div>

                      <div className="input__container">
                        <label htmlFor="userName">User Name</label>
                        <Field
                          type="userName"
                          name="userName"
                          id="userName"
                          placeholder="username"
                          className={
                            errors.email && touched.email
                              ? "input__error"
                              : `input__element`
                          }
                        />
                        <ErrorMessage
                          name="userName"
                          component="span"
                          className="auth__error"
                        />
                      </div>

                      <div className="input__container">
                        <label htmlFor="email">Email</label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          placeholder="yourname@email.com"
                          className={
                            errors.email && touched.email
                              ? "input__error"
                              : `input__element`
                          }
                        />
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="auth__error"
                        />
                      </div>
                    </aside>

                    {isValid ? (
                      <Button text="Next" />
                    ) : (
                      <button className="button__element disabled">next</button>
                    )}
                  </Form>
                  <section className="signup__options">
                    <p>
                      <span>Already a user?</span>
                      <Link to={"/"} className="createAccount">
                        Log In
                      </Link>{" "}
                    </p>
                  </section>
                </section>
              </section>
            );
          }}
        </Formik>
      </>
    </AuthLayout>
  );
};

const FormTwo = () => {
  const [InputType, ToggleIcon] = useTogglePassword();
  const [value, setValue] = useState<string>();
  const [error, setError] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [disableSecondBtn, setDisableSecondBtn] = useState<boolean>(false);

  const navigate = useNavigate();

  const { setSingleStoreState } = useContext(AuthContext);

  // This function code updates the state of the name input
  const handleBusinessName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessName(e.currentTarget.value);
  };

  // This function code updates the state of the password input
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  // This function code updates the state of the checkbox input
  const handleChecked = () => {
    setChecked(!checked);
  };

  // Regex for name,email and phone Validation
  const passwordRegex = /[a-zA-Z0-9]/;
  const nameRegex = /[a-zA-Z0-9]/;

  // Function that validates the input
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

    if (
      nameRegex.test(businessName.trim()) === false &&
      businessName.trim().length === 0
    ) {
      setError("*business name can not be blank");
    } else if (
      nameRegex.test(businessName.trim()) === false &&
      businessName.trim().length > 0
    ) {
      setError("*business name must contain at least one letter or number");
    } else if (
      nameRegex.test(businessName.trim()) &&
      businessName.trim().length < 4
    ) {
      setError("*business name must contain at least four characters");
    } else {
      setError("");
    }

    if (isValidPhoneNumber(`${value}`) === false) {
      setPhoneError("*Phone Number must be at least 10 digits");
    } else {
      setPhoneError("");
    }
  };

  console.log(error, phoneError, passwordError);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();

    if (
      businessName.trim().length > 0 &&
      nameRegex.test(businessName) &&
      error === "" &&
      password.trim().length > 0 &&
      passwordRegex.test(password) &&
      passwordError === "" &&
      value &&
      phoneError === "" &&
      checked
    ) {
      setSingleStoreState?.("one");
      navigate("/admin");
    }
  };

  // OnFocus code  is to remove the error warnings and red borders when the user clicks the input again
  const handlePasswordFocus = () => {
    setPasswordError("");
  };

  const handleNameFocus = () => {
    setError("");
  };

  //Sign up button disabled
  function disableButton2() {
    if (businessName !== "" && password !== "" && value !== undefined) {
      setDisableSecondBtn(true);
    } else {
      setDisableSecondBtn(false);
    }
  }

  useEffect(() => {
    disableButton2();
  }, [value, password, businessName]);

  return (
    <AuthLayout>
      <>
        <section className="container">
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <img src={progressBar2} alt="progress" />
          </div>
          <section className="auth">
            <p className="auth__changeAcc">
              <span>Create account as a multiple store</span>
              <Link to={"/"} className="changeAccount">
                Change
              </Link>
            </p>
            <h1 className="auth__heading">Create Account</h1>
            <p className="auth__subHeading">Let's get you started </p>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <aside className="grid">
                <div className="input__container">
                  <h3>Phone Number</h3>
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
                    <p className="auth__error">{phoneError}</p>
                  ) : (
                    " "
                  )}
                </div>

                <div className="input__container">
                  <h3>Primary Business Name</h3>
                  <Input
                    fullName={businessName}
                    handleName={handleBusinessName}
                    type="name"
                    placeholder="your business name"
                    handleNameFocus={handleNameFocus}
                    error={error}
                  />
                  {error ? <p className="auth__error">{error}</p> : "mikeeee"}
                </div>

                <div className="password__label input__container">
                  <h3>Enter password</h3>
                  <Input
                    type={InputType}
                    placeholder="Enter password"
                    password={password}
                    handlePassword={handlePassword}
                    handlePasswordFocus={handlePasswordFocus}
                    passwordError={passwordError}
                  />
                  <div className="eyeIcon">{ToggleIcon}</div>
                  {passwordError ? (
                    <p className="auth__error">{passwordError}</p>
                  ) : (
                    " "
                  )}
                </div>

                <aside className="checkbox__label">
                  <div>
                    <Input
                      type="checkbox"
                      checked={checked}
                      handleChecked={handleChecked}
                    />
                    <small>
                      By signing up, I agree to the
                      <span className="text__purple">
                        {" "}
                        Terms of Service{" "}
                      </span>{" "}
                      and
                      <span className="text__purple"> Privacy Policy </span>
                    </small>
                  </div>
                </aside>

                <aside className="auth__btns">
                  <Button
                    text="go back"
                    onclick={() => {
                      setSingleStoreState?.("one");
                    }}
                  />
                  {disableSecondBtn ? (
                    <Button text="Create Account" />
                  ) : (
                    <button className="button__element disabled">
                      Create Account
                    </button>
                  )}
                </aside>
              </aside>
            </form>
            <section className="signup__options">
              <p>
                <span>Already a user?</span>
                <Link to={"/login"} className="createAccount">
                  Log In
                </Link>{" "}
              </p>
            </section>
          </section>
        </section>
      </>
    </AuthLayout>
  );
};

const SignUp = () => {
  const { singleStoreState } = useContext(AuthContext);
  return <>{singleStoreState === "one" ? <FormOne /> : <FormTwo />}</>;
};

export default SignUp;
