import { MdArrowBackIos } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi";
import naira from "../../assets/naira.svg";
import pos from "../../assets/pos.svg";
import transfer from "../../assets/transfer.svg";
import Button from "../ui/button";
import { useState } from "react";

interface MethodType {
  img: any;
  text: string;
}

interface ModalClose {
  closeModal: () => void;
  closeConfirmPayment: () => void;
}

export default function Payment({
  closeModal,
  closeConfirmPayment,
}: ModalClose) {
  const paymentsMethods: MethodType[] = [
    {
      img: naira,
      text: "cash",
    },
    {
      img: pos,
      text: "POS",
    },
    {
      img: transfer,
      text: "transfer",
    },
  ];
  const [activePayment, setActivePayment] = useState("");
  const btnActions = () => {
    closeModal();
    closeConfirmPayment();
  };

  return (
    <section className="payment">
      <aside className="payment__top">
        <header>
          <MdArrowBackIos onClick={closeModal} />
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
            {paymentsMethods.map((pay, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setActivePayment(pay.text)}
                  className={activePayment === pay.text ? "activePayment" : ""}
                >
                  <img src={pay.img} alt={pay.text} />
                  <small>{pay.text}</small>
                  {activePayment === pay.text && (
                    <HiCheckCircle
                      color="#ec9c04"
                      className={
                        activePayment === pay.text ? "icon-display" : "none"
                      }
                    />
                  )}
                </div>
              );
            })}
          </aside>
        </div>
      </aside>

      <form className="payment__bottom">
        <div className="payment__bottom--input">
          <h3>enter amount received:</h3>
          <input type="number" className="input__ordinary" />
        </div>

        <div className="payment__bottom--btns">
          <span onClick={closeModal}>cancel</span>
          <Button text="confirm payment" onclick={btnActions} />
        </div>
      </form>
    </section>
  );
}
