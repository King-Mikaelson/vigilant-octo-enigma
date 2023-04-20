import { MdArrowBackIos } from "react-icons/md";
import naira from "../../assets/naira.svg";
import pos from "../../assets/pos.svg";
import transfer from "../../assets/transfer.svg";
import Input from "../ui/Input";
import Button from "../ui/button";

export default function Payment() {
  return (
    <section className="payment__wrapper">
      <div className="payment">
        <aside className="payment__top">
          <header>
            <MdArrowBackIos />
            <h1>Payment</h1>
          </header>
          <small>3 payment method available</small>
        </aside>

        <aside className="payment__mid">
          <div className="amount">
            <small>Total Amount to be Paid</small>
            <h4>₦22,000</h4>
          </div>

          <div className="payment__methods">
            <h5>Payment Method</h5>
            <aside className="methods">
              <div>
                <img src={naira} alt="naira" />
                <small>cash</small>
              </div>
              <div>
                <img src={pos} alt="pos" />
                <small>pos</small>
              </div>
              <div>
                <img src={transfer} alt="transfer" />
                <small>transfer</small>
              </div>
            </aside>
          </div>
        </aside>

        <form className="payment__bottom">
          <h3>enter amount received</h3>
          <Input type="number" />
          <div>
            <span>cancel</span>
            <Button text="confirm payment" />
          </div>
        </form>
      </div>
    </section>
  );
}
