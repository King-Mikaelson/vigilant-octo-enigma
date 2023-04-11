import { Link } from "react-router-dom";
import Button from "../../components/ui/button";
import { BsPerson } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";
import { RiCalendarCheckFill } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Subscribe() {
  return (
    <main>
      <div>
        <div>
          <h3>The Right Plan for Your Business</h3>
          <p>
            We’ll be taking a <span>4%</span> commission of your monthly sales.
            This way you don’t have to bother about a particular subscription
            amount every month, we take just <span>4%</span> of whatever you
            make monthly.
          </p>
        </div>
        <div>
          {/* Perks */}
          <div>
            <p>PERKs</p>
            <div>
              <span>
                <AiFillCheckCircle />
              </span>
              <p>Free 1 month trial for new user</p>
            </div>
            <div>
              <span>
                <AiFillCheckCircle />
              </span>
              <p>Get reminded when your trial is about to end</p>
            </div>
            <div>
              <span>
                <AiFillCheckCircle />
              </span>
              <p>Cancel anytime you want</p>
            </div>
          </div>
          {/* Card Details */}
          <div>
            <h4>Billing Information</h4>
            <form>
              <div>
                <label htmlFor="nameOnCard">
                  <span>
                    <BsPerson />
                  </span>
                  <input
                    type="text"
                    id="nameOnCard"
                    placeholder="Name on Card"
                    required
                  />
                </label>
              </div>
              <div>
                <label htmlFor="cardNumber">
                  <span>
                    <FiCreditCard />
                  </span>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="Card Number"
                    required
                  />
                </label>
              </div>
              <div>
                <label htmlFor="expires">
                  <span>
                    <RiCalendarCheckFill />
                  </span>
                  <input
                    type="text"
                    id="expires"
                    placeholder="MM/YYYY"
                    required
                  />
                </label>
              </div>
              <div>
                <label htmlFor="cvv">
                  <span>
                    <MdLockOutline />
                  </span>
                  <input type="text" id="cvv" placeholder="CVV" required />
                </label>
              </div>
              <Button
                text="Start Free Trial"
                onclick={(e) => e.preventDefault()}
              />
            </form>

            <Link to="/" className="auth__links">
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <span>Powered By Uppist</span>
    </main>
  );
}
