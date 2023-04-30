import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import MasterCard from "../../../../../assets/mastercard.png";

const CardDetails = () => {
  const handleDeleteUser = () => {};

  return (
    <div className="card-details">
      <div className="card-details-header">
        <h4>Card Details</h4>
        <span className="delete-icon">
          <button className="del-user_btn" onClick={() => handleDeleteUser()}>
            <AiOutlineDelete className="delete-icon" />
          </button>
        </span>
      </div>
      <div className="card-details-body">
        <p>Master 1234 **** 58745</p>
        <p>Expire 12/23</p>
        <div className="addcard-link">
          <Link to="">Edit Card Info</Link>
          <span>
            <img src={MasterCard} alt="master card" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
