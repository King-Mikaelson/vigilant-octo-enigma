import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import CardDetails from "../cardDetails";
import { TbCurrencyNaira } from "react-icons/tb";

const tabledata = [
  {
    id: 1,
    date: "May 31, 2023",
    amount: "120,000",
    plan: "4% monthly",
  },
  {
    id: 2,
    date: "June 31, 2023",
    amount: "200,000",
    plan: "4% monthly",
  },
  {
    id: 3,
    date: "July 31, 2023",
    amount: "100,000",
    plan: "4% monthly",
  },
];
const ManageSubs = () => {
  return (
    <div className="sub-container">
      <h4>Manage Subscriptions</h4>
      <p className="subheading">Current Plan</p>
      <hr />
      <div className="sub-body">
        <span>4% Monthly</span>
        <p className="sub-body-p">We take 4% of your monthly sales</p>
        <button className="subs-cancel-btn">
          <Link to="/cancel_subscription"> Cancel Plan</Link>
        </button>
        <p className="renew-date">Your plan renews on July 31, 2023</p>
        <div className="payment-method">
          <p>Payment Method</p>
          <div className="addcard-div">
            <IoIosAdd className="icon" />
            <Link to="/settings/managesubscriptions/add_card">
              Add New Card
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="card-details-div">
        <CardDetails />
      </div>
      <p className="charge-date">
        Cards will be charged at the end of the month. All major credit / debit
        cards are accepted.
      </p>
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
          {tabledata.map((data) => (
            <tbody key={data.id}>
              <tr>
                <td>{data.date}</td>
                <td>
                  <TbCurrencyNaira />
                  {data.amount}
                </td>
                <td>{data.plan}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};
export default ManageSubs;
