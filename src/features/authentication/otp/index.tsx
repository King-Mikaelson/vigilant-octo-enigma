import { useState, useContext } from "react";
import AuthLayout from "../../../layout/authLayout";
import OtpInput from "./OtpInput";
import AppContext from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Otp() {
  const [otp, setOtp] = useState("");
  const onChange = (value: string) => setOtp(value);
  const { otpState } = useContext(AppContext);
  return (
    <AuthLayout>
      <section className="container">
        <section className="auth">
          {otpState === "success" ? (
            <OtpSuccess />
          ) : (
            <>
              <h1 className="auth__heading">Code Verification</h1>
              <p className="auth__paragraph otp">
                {otpState === "resent" ? "The code has been resent." : ""} Enter
                the 6-digit verification code sent to user@email.com.
              </p>
              <OtpInput value={otp} valueLength={6} onChange={onChange} />
            </>
          )}
        </section>
      </section>
    </AuthLayout>
  );
}

const OtpSuccess = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="auth__verify-email">
        <h3 className="auth__email">Email Verification Successful</h3>
        <p className="auth__paragraph otp">Your email has been verified.</p>
        <button
          className="button__element"
          style={{ width: "100%" }}
          onClick={() => navigate("/login")}
        >
          Log in
        </button>
      </div>
    </>
  );
};
