import { useState } from "react";
import "react-phone-number-input/style.css";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdLockOutline } from "react-icons/md";
import Input from "../../../../ui/Input";
import Button from "../../../../ui/button";
import { RiCalendarCheckFill } from "react-icons/ri";
import { FiCreditCard } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";

export default function AddCard() {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>();
  const [fullName, setFullName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/settings/managesubscriptions");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();
    setIsModalOpen(true);
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
  };

  const handleBack = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/settings/managesubscriptions");
  };

  return (
    <section className="sub-add-user">
      <h3>
        <MdArrowBackIos className="add-user_icon" onClick={handleBack} />
        Manage Subscriptions
      </h3>
      <div className="billing_container">
        <h4>Add New Card</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nameOnCard">
              <p>NAME ON CARD</p>
              <div className="input-div">
                <span>
                  <BsPerson className="input-icon" />
                </span>
                <Input type="text" id="nameOnCard" placeholder="CC Achukwu " />
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="cardNumber">
              <p>CARD NUMBER</p>
              <div className="input-div">
                <span>
                  <FiCreditCard className="input-icon" />
                </span>
                <Input
                  type="number"
                  id="cardNumber"
                  placeholder="1234 1234 1234 1234"
                />
              </div>
            </label>
          </div>

          <div className="date-cvv">
            <div>
              <label htmlFor="expires">
                <p>EXPIRES</p>
                <div className="input-div">
                  <span>
                    <RiCalendarCheckFill className="input-icon" />
                  </span>
                  <Input type="number" id="expires" placeholder="MM/YYYY" />
                </div>
              </label>
            </div>
            <div>
              <label htmlFor="cvv">
                <p>CVV</p>
                <div className="input-div">
                  <span>
                    <MdLockOutline />
                  </span>
                  <Input type="number" id="cvv" placeholder="CVV" />
                </div>
              </label>
            </div>
          </div>

          <button className="trial-btn">Add Card</button>
          <div className="cancel-btn-div">
            <button className="cancel-btn" onClick={handleBack}>
              Go Back
            </button>
          </div>
        </form>
        {isModalOpen && (
          <div className="user-modal">
            <div className="modal-content">
              <p>Card added successfully!</p>
              <button className="close-btn" onClick={handleModalClose}>
                Okay
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
