import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import MasterCard from "../../../../../assets/mastercard.png";
import Visa from "../../../../../assets/visacard.png";

const carddata = [
  {
    id: 1,
    cardType: MasterCard,
    cardNumber: "5634 **** 58745",
    expires: "12/23",
  },
  {
    id: 2,
    cardType: Visa,
    cardNumber: "4758 **** 58745",
    expires: "12/23",
  },
];
const CardDetails = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDeleteCard = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/settings/managesubscriptions");
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(false);
    setIsModalOpen(true);
  };
  return (
    <>
      {carddata.map((card) => (
        <div className="card-details" key={card.id}>
          <div className="card-details-header">
            <h4>Card Details</h4>
            <span className="del-icon">
              <button
                className="del-user_btn"
                onClick={() => handleDeleteCard()}
              >
                <AiOutlineDelete className="icon" />
              </button>
            </span>
          </div>
          <div className="card-details-body">
            <p>Master {card.cardNumber}</p>
            <p>Expires {card.expires}</p>
            <div className="addcard-link">
              <Link to=""> Edit Card Info</Link>
              <span>
                <img src={card.cardType} alt="master card" />
              </span>
            </div>
          </div>
        </div>
      ))}
      {isDeleteModalOpen && (
        <div className="del-container">
          <div className="del-content">
            <p className="suspend-p">Delete Card?</p>
            <div className="buttons">
              <button className="del-btn" onClick={handleDelete}>
                Delete
              </button>
              <button
                className="cancel-btn suspend-cancel-btn"
                onClick={() => {
                  handleDeleteModal();
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="user-modal">
          <div className="modal-content">
            <p>Card has been deleted from the system!</p>
            <button className="close-btn" onClick={handleModalClose}>
              Okay
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDetails;
