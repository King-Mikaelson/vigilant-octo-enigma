import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../../layout/authLayout";
import Input from "../../../../ui/Input";
import Button from "../../../../ui/button";
import { useState } from "react";

const CancelSubscription = () => {
  const [selectedReason, setSelectedReason] = useState("");
  const reasons = [
    "This plan is out of my price range",
    "I wanted to try temporarily",
    "I subscribed by accident",
    "I had technical issues",
    "I don’t use Uppist RMS anymore",
    "I didn’t find the features valuable",
    "Other",
  ];
  const handleReasonSelection = (reason: string) => {
    setSelectedReason(reason);
  };
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/settings/managesubscriptions");
  };

  const handleBack = () => {
    navigate("/settings/managesubscriptions");
  };

  return (
    <>
      <AuthLayout>
        <section className="container subs_container">
          <section className="auth subs_auth">
            <h1 className="auth__heading sub_header">Why are you canceling?</h1>
            <form onSubmit={handleSubmit} className="sub_form">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className={`cancel-option ${
                    selectedReason === reason ? "active" : ""
                  }`}
                  onClick={() => handleReasonSelection(reason)}
                >
                  {reason}
                </div>
              ))}
              <button type="submit" disabled={!selectedReason}>
                {selectedReason ? "Cancel Subscription" : "Continue"}
              </button>
            </form>
            <button className="subs_cancel-btn" onClick={handleBack}>
              Go Back
            </button>
          </section>
          {isModalOpen && (
            <div className="user-modal">
              <div className="modal-content">
                <p>Your subscription plan has been cancelled!</p>
                <button className="close-btn" onClick={handleModalClose}>
                  Okay
                </button>
              </div>
            </div>
          )}
        </section>
      </AuthLayout>
    </>
  );
};

export default CancelSubscription;
