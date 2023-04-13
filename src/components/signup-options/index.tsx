import { Link } from "react-router-dom";
import googleIcon from "../../assets/google.png";


type Props ={
  info: string
}

export default function SignInOptions({info}:Props) {
  return (
    <section className="signup__options">
      {
        info === "login" ? <p>
        <span>Don't have an account?</span>
        <Link to={"signup"} className="createAccount">
          Create Account
        </Link>{" "}
      </p> :

<p>
<span>Already A User?</span>
<Link to={"/"} className="createAccount">
  Login
</Link>{" "}
</p>
      }

      <div className="or">
        <span className="line"></span>
        <h2>or</h2>
      </div>
      <Link to={"#"} className="google">
        <img src={googleIcon} alt="google" />
        Sign in with Google
      </Link>
    </section>
  );
}
