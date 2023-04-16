import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";
import { RiCalendarCheckFill } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import Logo from "../../assets/uppistLogo.png";

export default function Subscribe() {
  return (
    <main className="main-container">
      <div className="sub-container">
        <div className="sub-header">
          <h3>The Right Plan for Your Business</h3>
          <p>
            We’ll be taking a <span>4%</span> commission of your monthly sales.
            This way you don’t have to bother about a particular subscription
            amount every month, we take just <span>4%</span> of whatever you
            make monthly.
          </p>
        </div>
        <div className="sub-content">
          {/* Perks */}
          <div className="perks-container">
            <div className="perks-header">PERKS</div>
            <div className="sub-trial">
              <span>
                <AiFillCheckCircle />
              </span>
              <p>Free 1 month trial for new user</p>
            </div>
            <div className="sub-trial">
              <span>
                <AiFillCheckCircle />
              </span>
              <p>Get reminded when your trial is about to end</p>
            </div>
            <div className="sub-trial">
              <span>
                <AiFillCheckCircle />
              </span>
              <p>Cancel anytime you want</p>
            </div>
          </div>
          {/* Card Details */}
          <div className="billing-container">
            <h4>Billing Information</h4>
            <form>
              <div>
                <label htmlFor="nameOnCard">
                  <p>NAME ON CARD</p>
                  <div className="input-div">
                    <span>
                      <BsPerson className="input-icon" />
                    </span>
                    <input
                      type="text"
                      id="nameOnCard"
                      placeholder="CC Achukwu "
                      required
                    />
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
                    <input
                      type="text"
                      id="cardNumber"
                      placeholder="1234 1234 1234 1234"
                      required
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
                      <input
                        type="text"
                        id="expires"
                        placeholder="MM/YYYY"
                        required
                      />
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
                      <input type="text" id="cvv" placeholder="CVV" required />
                    </div>
                  </label>
                </div>
              </div>

              <button className="trial-btn">Start Free Trial</button>
            </form>

            <Link to="/" className="sub-link">
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <div className="logo-div">
        <span>Powered By</span>{" "}
        <span>
          <img src={Logo} alt="logo" className="logo-img" />
        </span>
      </div>
    </main>
  );
}
