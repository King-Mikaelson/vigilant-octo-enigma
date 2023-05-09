import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../../../layout/authLayout";
import Button from "../../../../ui/button";
import { useState } from "react";

export default function DeleteAccount() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/settings/profile");
  };

  const handleCancel = () => {
    navigate("/settings/profile");
  };

  return (
    <AuthLayout>
      <section className="">
        <h1>Delete</h1>
        {isModalOpen && (
          <div className="user-modal">
            <div className="modal-content">
              <p>Password Changed Successfully!</p>
              <button className="close-btn" onClick={handleModalClose}>
                Okay
              </button>
            </div>
          </div>
        )}
      </section>
    </AuthLayout>
  );
}
