import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
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
  const handleDeleteUser = () => {};

  return (
    <>
      {carddata.map((card) => (
        <div className="card-details" key={card.id}>
          <div className="card-details-header">
            <h4>Card Details</h4>
            <span className="del-icon">
              <button
                className="del-user_btn"
                onClick={() => handleDeleteUser()}
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
    </>
  );
};

export default CardDetails;
