import { Link, useNavigate } from 'react-router-dom';
import useTogglePassword from '../hooks/useTogglePassword';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/button';
import AuthLayout from '../../../layout/authLayout';
import { useContext, useEffect, useState } from 'react';
import SignInOptions from '../../../components/authentication/signInOptions';
import AppContext from '../../../context/AppContext';
import AuthContext from '../context/AuthContext';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import {
  loginUser,
  setIsAuthenticated,
} from '../../../redux/features/user/userSlice';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { toast } from 'react-toastify';
export default function Login() {
  const { error, loading, user } = useAppSelector(
    (state: {
      user: {
        user: any;
        isAuthenticated: boolean;
        loading: boolean;
        session: any;
        error: any;
      } & PersistPartial;
    }) => state.user
  );
  const dispatch = useAppDispatch();
  console.log(user);

  //TOGGLING PASSWORD HIDE/SHOW
  const [InputType, ToggleIcon] = useTogglePassword();
  const [value, setValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  const [errorValue, setErrorValue] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(true);

  const navigate = useNavigate();
  // This function code updates the state of the input
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  // This function code updates the state of the input
  const handlePasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.currentTarget.value);
  };

  // This function code updates the state of the checkbox input
  const handleChecked = () => {
    setChecked(!checked);
  };

  // Regex for email and password
  const passwordRegex = /[a-zA-Z0-9]/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Function that validates the input
  const validate = () => {
    if (
      passwordRegex.test(passwordValue!.trim()) === false &&
      passwordValue?.trim().length === 0
    ) {
      setErrorPassword('*Password can not be blank');
    } else if (
      passwordRegex.test(passwordValue!.trim()) === false &&
      passwordValue!.trim().length > 0
    ) {
      setErrorPassword('*Password must contain at least one letter or number');
    } else if (
      passwordRegex.test(passwordValue!.trim()) &&
      passwordValue!.trim().length < 4
    ) {
      setErrorPassword('*Password must contain at least four characters');
    } else {
      setErrorPassword('');
    }

    if (
      emailRegex.test(value!.trim()) === false &&
      value!.trim().length === 0
    ) {
      setErrorValue('*Email can not be blank');
    } else if (emailRegex.test(value.trim()) === false) {
      console.log('wrong');
      setErrorValue('*Invalid Email');
    } else {
      setErrorValue('');
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      await dispatch(loginUser({ email, password }));
      // login successful, do something here (e.g., redirect, show success message)
      if (!error) {
        toast('Logged In Successfully!');
      } else {
        toast(`${error}`);
        console.error('Login failed:', error);
      }
    } catch (error) {
      // Handle registration error here
      console.error('Login failed:', error);
      toast(`${error}`);
    }
  };

  // This function runs on submit when a button in a form  is clicked
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();
    if (errorValue === '' && errorPassword === '' && checked) {
      handleLogin(value, passwordValue);
    } else {
      console.log('failed');
    }
  };

  // OnFocus code  is to remove the error warnings and red borders when the user clicks the input again
  const handleValueFocus = () => {
    setErrorValue('');
  };
  const handlePasswordValueFocus = () => {
    setErrorPassword('');
  };

  //Login Option from context
  const { loginOption, setLoginOption } = useContext(AppContext);
  //Active Option
  const activeOption = {
    color: '#332F32',
  };

  //disabled button state
  const disabled = value === '' || passwordValue === '';

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user]);

  return (
    <AuthLayout>
      <section className="container">
        <section className="auth">
          <h1 className="auth__heading">Log into your Account</h1>
          <p className="auth__subHeading">Welcome Back</p>
          <aside className="auth__loginSwitch">
            <div className="options">
              <span
                onClick={() => setLoginOption?.('email')}
                style={loginOption === 'email' ? activeOption : undefined}
              >
                Email
              </span>
              <span
                onClick={() => setLoginOption?.('username')}
                style={loginOption === 'username' ? activeOption : undefined}
              >
                Username
              </span>
            </div>
            <span
              className={
                loginOption === 'email' ? 'slider' : 'slider selectedUsername'
              }
            ></span>
          </aside>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <label>
              <h3>{loginOption === 'email' ? 'Email address' : 'Username'}</h3>
              <Input
                type="text"
                value={value}
                handleValue={handleValue}
                handleValueFocus={handleValueFocus}
                placeholder={
                  loginOption === 'email'
                    ? 'yourname@email.com/phone number'
                    : 'username'
                }
                errorValue={errorValue}
              />
              {errorValue ? <p className="auth__error">{errorValue}</p> : ' '}
            </label>

            <label className="password__label">
              <h3>Enter password</h3>
              <Input
                type={InputType}
                passwordValue={passwordValue}
                handlePasswordValue={handlePasswordValue}
                handlePasswordValueFocus={handlePasswordValueFocus}
                errorPassword={errorPassword}
                placeholder="Enter password"
              />
              <div className="eyeIcon">{ToggleIcon}</div>
              {errorPassword ? (
                <p className="auth__error">{errorPassword}</p>
              ) : (
                ' '
              )}
            </label>

            <aside className="checkbox__label">
              <label>
                <Input type="checkbox" checked handleChecked={handleChecked} />
                <small>Remember me</small>
              </label>

              <Link to={'/input-email'}>Forgot Password?</Link>
            </aside>
            {disabled ? (
              <button className="button__element disabled">log in</button>
            ) : (
              <Button text={loading ? 'please wait' : 'log in'} />
            )}
          </form>
          <SignInOptions />
        </section>
      </section>
    </AuthLayout>
  );
}
