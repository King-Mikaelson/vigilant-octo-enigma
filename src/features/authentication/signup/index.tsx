import AuthLayout from "../../../layout/authLayout";
import useTogglePassword from "../hooks/useTogglePassword";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/button";
import { useEffect, useState, useContext } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import progressBar1 from "../../../assets/singleStoreProg1.png";
import progressBar2 from "../../../assets/progressBar2.png"
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../features/authentication/context/AuthContext";


const FormOne = () => {
  
  const [InputType, ToggleIcon] = useTogglePassword();
  const [fullName, setFullName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [disableFirstBtn, setDisableFirstBtn] = useState<boolean>(false);


  const{form1, setForm1} = useContext(AuthContext);

  const navigate = useNavigate();

  // This function code updates the state of the email input
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  // This function code updates the state of the name input
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.currentTarget.value);
  };

  // This function code updates the state of the name input
  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value);
  };


  // Regex for name,email and phone Validation
  const nameRegex = /[a-zA-Z]/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex = /[a-zA-Z0-9]/;

  // Function that validates the input
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

    if (!emailRegex.test(email.trim()) && email.trim().length === 0) {
      setEmailError("*Email can not be blank");
    } else if (!emailRegex.test(email.trim()) && email.trim().length > 0) {
      setEmailError("*Email is not valid");
    } else {
      setEmailError("");
    }
  };

  // This function runs on submit when a button in a form  is clicked
  const handleDefault = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleSubmit = () => {
    validate();

    if (
      error === "" &&
      fullName.trim().length > 0 &&
      nameRegex.test(fullName) &&
      emailRegex.test(email)
    ) {
      navigate("/signup2");
    }
  };

  // OnFocus code  is to remove the error warnings and red borders when the user clicks the input again
  const handleNameFocus = () => {
    setError("");
  };
  const handleEmailFocus = () => {
    setEmailError("");
  };



    //Sign up button disabled
    function disableButton(){
      if(fullName !== "" && userName !=="" && email !== ""){
        setDisableFirstBtn(true);
      }else{
        setDisableFirstBtn(false);
      }
  
    }

  useEffect(() => {
    disableButton()
  }, [fullName, userName, email])

  function changePage(){
    setForm1?.("two")
  }

  return (
    <AuthLayout>
      <>
      <section className="container">
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <img src={progressBar1} alt="progress" />
        </div>
        <section className="auth">
          <p className="auth__changeAcc">
            <span>Create account as a single store</span>
            <Link to={"/"} className="changeAccount">
              Change
            </Link>
          </p>
          <h1 className="auth__heading">Create Account</h1>
          <p className="auth__subHeading">Let's get you started </p>
          <form className="form" onSubmit={(e) => handleDefault(e)}>
            <aside className="grid">
              <div className="input__container">
                <h3>Full Name</h3>
                <Input
                  fullName={fullName}
                  handleName={handleName}
                  type="name"
                  placeholder="fullname"
                  handleNameFocus={handleNameFocus}
                  error={error}
                />
                {error ? <p className="auth__error">{error}</p> : " "}
              </div>

              <div className="input__container">
                <h3>Username</h3>
                <Input
                  userName={userName}
                  handleUserName={handleUserName}
                  type="name"
                  placeholder="username"
                  error={error}
                />
                {error ? <p className="auth__error">{error}</p> : " "}
              </div>

              <div className="input__container">
                <h3>Email address</h3>
                <Input
                  type="email"
                  email={email}
                  handleEmail={handleEmail}
                  handleEmailFocus={handleEmailFocus}
                  placeholder="yourname@email.com"
                  emailError={emailError}
                />
                {emailError ? <p className="auth__error">{emailError}</p> : " "}
              </div>

            </aside>

            {disableFirstBtn ? (
              <Button changePage={changePage}  text="Next" />
              ) : (
              <button className="button__element disabled">next</button>
            )}
          </form>
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
      </>
    
    </AuthLayout>
  );
}


const FormTwo = () => {
  const [InputType, ToggleIcon] = useTogglePassword();
  const [value, setValue] = useState<string>();
  const [error, setError] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [disableSecondBtn, setDisableSecondBtn] = useState<boolean>(false);

  const navigate = useNavigate();

  const{form1, setForm1} = useContext(AuthContext );


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
 
     if (isValidPhoneNumber(`${value}`) === false) {
       setPhoneError("*Phone Number must be at least 10 digits");
     } else {
       setPhoneError("");
     }
 
 
   // This function runs on submit when a button in a form  is clicked
   const handleDefault = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

   const handleSubmit = () => {
     validate();
 
     if (
       businessName.trim().length > 0 &&
       password.trim().length > 0 &&
       passwordRegex.test(password) &&
       passwordError === "" &&
       value &&
       phoneError === "" &&
       checked
     ) {
       navigate("/signup2");
     }
   };

   }

     // This function runs on submit when a button in a form  is clicked
  const handleDefault = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleSubmit = () => {
    validate();

  if (
      businessName.trim().length > 0 &&
      password.trim().length > 0 &&
      passwordRegex.test(password) &&
      passwordError === "" &&
      value &&
      phoneError === "" &&
      checked
    ) {
      navigate("/signup2");
    }
  };
 
   // OnFocus code  is to remove the error warnings and red borders when the user clicks the input again
   const handlePasswordFocus = () => {
     setPasswordError("");
   };
   const handleEmailFocus = () => {
     setEmailError("");
   };

   const handleNameFocus = () => {
    setError("");
  };

 
 
       //Sign up button disabled
   function disableButton2(){
     if(businessName !== "" && password !== "" && value !== undefined){
       setDisableSecondBtn(true);
     }else{
       setDisableSecondBtn(false);
     }
 
   }
 
 
 
     useEffect(() => {
       disableButton2()
     }, [value, password, businessName])
 
 


     return (
      <AuthLayout>
        <>
        <section className="container">
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <img src={progressBar2} alt="progress" />
        </div>
        <section className="auth">
          <p className="auth__changeAcc">
            <span>Create account as a single store</span>
            <Link to={"/"} className="changeAccount">
              Change
            </Link>
          </p>
          <h1 className="auth__heading">Create Account</h1>
          <p className="auth__subHeading">Let's get you started </p>
          <form className="form" onSubmit={(e) => handleDefault(e)}>
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
                {phoneError ? <p className="auth__error">{phoneError}</p> : " "}
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
                {error ? <p className="auth__error">{error}</p> : " "}
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
                    <span className="text__purple"> Terms of Service </span> and
                    <span className="text__purple"> Privacy Policy </span>
                  </small>
                </div>
              </aside>

              <aside className="auth__btns">
              <Button text="go back" onclick={() => navigate(-1)} />
              {disableSecondBtn ? (
                <Button text="Create Account" />
              ) : (
                <button className="button__element disabled">Create Account</button>
              )}
            </aside>
            </aside>
            
          </form>
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
        </>
      
      </AuthLayout>
    );
}


const  SignUp = () => {
  const{form1, setForm1, formOne, setFormOne} = useContext(AuthContext );
  return (
  <>
  {form1 === "one" ? <FormOne/> : <FormTwo/>}
  </>
  );
}

export default SignUp;
