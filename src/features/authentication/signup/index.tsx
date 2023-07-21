import AuthLayout from '../../../layout/authLayout';
import useTogglePassword from '../hooks/useTogglePassword';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/button';
import { useEffect, useState, useContext } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import progressBar1 from '../../../assets/singleStoreProg1.png';
import progressBar2 from '../../../assets/progressBar2.png';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../../features/authentication/context/AuthContext';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Values } from '../../../types';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { registerUser } from '../../../redux/features/user/userSlice';
import { toast } from 'react-toastify';

// const FormOne = () => {
//   const SignInSchema = Yup.object().shape({
//     email: Yup.string().email().required('*email is required'),
//     userName: Yup.string()
//       .required('*username is Required')
//       .min(3, '*username is too short - should be 3 chars minimum'),
//     fullName: Yup.string()
//       .required('*fullName is Required')
//       .min(7, '*fullname is too short - should be 7 chars minimum'),
//   });

//   const { setSingleStoreState, initialValues, submitForm } =
//     useContext(AuthContext);
//   const handleSubmit = (values: Values) => {
//     submitForm?.(values, {} as FormikHelpers<Values>);
//   };

//   return (
//     <AuthLayout>
//       <>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={SignInSchema}
//           onSubmit={handleSubmit}
//         >
//           {(formik: {
//             errors: any;
//             touched: any;
//             isValid: any;
//             dirty: any;
//           }) => {
//             const { errors, touched, isValid } = formik;
//             return (
//               <section className="container">
//                 <div style={{ textAlign: 'center', marginTop: '4rem' }}>
//                   <img
//                     src={progressBar1}
//                     alt="progress"
//                     className="progressBar"
//                   />
//                 </div>
//                 <section className="auth">
//                   <p className="auth__changeAcc">
//                     <span>Create account as a multiple store</span>
//                     <Link to={'/select-store'} className="changeAccount">
//                       Change
//                     </Link>
//                   </p>
//                   <h1 className="auth__heading">Create Account</h1>
//                   <p className="auth__subHeading">Let's get you started </p>
//                   <Form className="form">
//                     <aside className="grid">
//                       <div className="input__container">
//                         <label htmlFor="userName">Full Name</label>
//                         <Field
//                           type="text"
//                           name="fullName"
//                           id="fullName"
//                           placeholder="fullname"
//                           className={
//                             errors.email && touched.email
//                               ? 'input__error'
//                               : `input__element`
//                           }
//                         />
//                         <ErrorMessage
//                           name="fullName"
//                           component="span"
//                           className="auth__error"
//                         />
//                       </div>

//                       <div className="input__container">
//                         <label htmlFor="userName">User Name</label>
//                         <Field
//                           type="userName"
//                           name="userName"
//                           id="userName"
//                           placeholder="username"
//                           className={
//                             errors.email && touched.email
//                               ? 'input__error'
//                               : `input__element`
//                           }
//                         />
//                         <ErrorMessage
//                           name="userName"
//                           component="span"
//                           className="auth__error"
//                         />
//                       </div>

//                       <div className="input__container">
//                         <label htmlFor="email">Email</label>
//                         <Field
//                           type="email"
//                           name="email"
//                           id="email"
//                           placeholder="yourname@email.com"
//                           className={
//                             errors.email && touched.email
//                               ? 'input__error'
//                               : `input__element`
//                           }
//                         />
//                         <ErrorMessage
//                           name="email"
//                           component="span"
//                           className="auth__error"
//                         />
//                       </div>
//                     </aside>

//                     {isValid ? (
//                       <Button text="Next" />
//                     ) : (
//                       <button className="button__element disabled">next</button>
//                     )}
//                   </Form>
//                   <section className="signup__options">
//                     <p>
//                       <span>Already a user?</span>
//                       <Link to={'/'} className="createAccount">
//                         Log In
//                       </Link>{' '}
//                     </p>
//                   </section>
//                 </section>
//               </section>
//             );
//           }}
//         </Formik>
//       </>
//     </AuthLayout>
//   );
// };

const SignUp = () => {
  const [InputType, ToggleIcon] = useTogglePassword();
  const [passwordError, setPasswordError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [disableSecondBtn, setDisableSecondBtn] = useState<boolean>(false);

  const navigate = useNavigate();
  const { error, loading, user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  console.log(user);

  // This function code updates the state of the password input
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword?.(e.currentTarget.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail?.(e.currentTarget.value);
  };

  // This function code updates the state of the checkbox input
  const handleChecked = () => {
    setChecked(!checked);
  };

  // Regex for name,email and phone Validation
  const passwordRegex = /[a-zA-Z0-9]/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Function that validates the input
  const validate = () => {
    if (
      passwordRegex.test(password!.trim()) === false &&
      password?.trim().length === 0
    ) {
      setPasswordError('*Password can not be blank');
    } else if (
      passwordRegex.test(password!.trim()) === false &&
      password!.trim().length > 0
    ) {
      setPasswordError('*Password must contain at least one letter or number');
    } else if (
      passwordRegex.test(password!.trim()) &&
      password!.trim().length < 4
    ) {
      setPasswordError('*Password must contain at least four characters');
    } else {
      setPasswordError('');
    }

    if (
      emailRegex.test(email!.trim()) === false &&
      email!.trim().length === 0
    ) {
      setEmailError('*Email can not be blank');
    } else if (emailRegex.test(email.trim()) === false) {
      console.log('wrong');
      setEmailError('*Invalid Email');
    } else {
      setEmailError('');
    }
  };

  const handleRegister = async (email: string, password: string) => {
    try {
      await dispatch(registerUser({ email, password }));
      // Registration successful, do something here (e.g., redirect, show success message)
      if (!error) {
        toast('Signed Up Successfully!');
      } else {
        toast(`${error}`);
      }
    } catch (error) {
      // Handle registration error here
      console.error('Registration failed:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();

    if (emailError === '' && passwordError === '' && checked) {
      // navigate("/admin");
      console.log(email, password);
      handleRegister(email, password);
      // toast('We have sent you a link to complete your signup in your email');
    } else {
      console.log('failed');
    }
  };

  // OnFocus code  is to remove the error warnings and red borders when the user clicks the input again
  const handlePasswordFocus = () => {
    setPasswordError('');
  };

  const handleEmailFocus = () => {
    setEmailError('');
  };

  //Sign up button disabled
  function disableButton2() {
    if (
      emailRegex.test(email) !== false &&
      passwordRegex.test(password) !== false
    ) {
      setDisableSecondBtn(true);
    } else {
      setDisableSecondBtn(false);
    }
  }

  useEffect(() => {
    disableButton2();
  }, [password, email]);

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user]);

  return (
    <AuthLayout>
      <>
        <section className="container">
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <img src={progressBar2} alt="progress" />
          </div>
          <section className="auth">
            <h1 className="auth__heading">Create Account</h1>
            <p className="auth__subHeading">Let's get you started </p>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <aside className="grid">
                <div className="input__container">
                  <h3>Email</h3>
                  <Input
                    email={email}
                    handleEmail={handleEmail}
                    type="email"
                    placeholder="your email"
                    handleEmailFocus={handleEmailFocus}
                    emailError={emailError}
                  />
                  {emailError ? (
                    <p className="auth__error">{emailError}</p>
                  ) : (
                    ''
                  )}
                </div>

                <div className="password__label input__container">
                  <h3>Password</h3>
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
                    ' '
                  )}
                </div>

                <aside className="checkbox__label">
                  <div className="checkbox">
                    <Input
                      type="checkbox"
                      checked={checked}
                      handleChecked={handleChecked}
                    />
                  </div>
                  <div>
                    <small>
                      By signing up, I agree to the
                      <span className="text__purple">
                        {' '}
                        Terms of Service{' '}
                      </span>{' '}
                      and
                      <span className="text__purple"> Privacy Policy </span>
                    </small>
                  </div>
                </aside>

                <aside>
                  {disableSecondBtn ? (
                    <Button text={loading ? 'please wait' : 'Create Account'} />
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
                <Link to={'/'} className="createAccount">
                  Log In
                </Link>{' '}
              </p>
            </section>
          </section>
        </section>
      </>
    </AuthLayout>
  );
};

export default SignUp;
