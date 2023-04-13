import googleIcon from "../../assets/google.png";
import { Link } from "react-router-dom";

export default function SignInOptions() {
  return (
    <section className="signup__options">
      <p>
        <span>Don't have an account?</span>
        <Link to={"signup"} className="createAccount">
          Create Account
        </Link>{" "}
      </p>
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
