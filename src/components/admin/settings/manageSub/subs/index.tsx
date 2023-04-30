import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import CardDetails from "../cardDetails";
import { TbCurrencyNaira } from "react-icons/tb";

const ManageSubs = () => {
  function handleModalClose() {}

  return (
    <div className="sub-container">
      <h4>Manage Subscriptions</h4>
      <p className="subheading">Current Plan</p>
      <hr />
      <div className="sub-body">
        <span>4% Monthly</span>
        <p className="sub-body-p">We take 4% of your monthly sales</p>
        <button
          className="subs-cancel-btn"
          onClick={() => {
            handleModalClose();
          }}
        >
          Cancel
        </button>
        <p>Your plan renews on July 31, 2023</p>
        <div className="payment-method">
          <p>Payment Method</p>
          <div className="addcard-link">
            <span>
              <IoIosAdd />
            </span>
            <Link to="">Add New Card</Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="Card-details-div">
        <CardDetails />
      </div>
      <span>
        Cards will be charged at the end of the month. All major credit / debit
        cards are accepted.
      </span>
      <div className="billing-history">
        <p>Billing History</p>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount Charged</th>
              <th>Subscription Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>May 31, 2023</td>
              <td>
                <TbCurrencyNaira />
                120,000
              </td>
              <td>4% monthly</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManageSubs;
