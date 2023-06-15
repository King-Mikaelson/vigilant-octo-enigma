import { MdArrowBackIos } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi";
import naira from "../../assets/naira.svg";
import pos from "../../assets/pos.svg";
import transfer from "../../assets/transfer.svg";
import Button from "../ui/button";
import { useContext, useState } from "react";
import PosService from "../../lib/posData";
import AuthContext from "../../features/authentication/context/AuthContext";
import AppContext from "../../context/AppContext";

interface MethodType {
  img: any;
  text: string;
}

interface ModalClose {
  closeModal: () => void;
  closeConfirmPayment: () => void;
  total: number;
}

export default function Payment({
  closeModal,
  closeConfirmPayment,
  total,
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
  const [amtPaid, setAmtPaid] = useState("");
  const { user } = useContext(AuthContext);
  const {
    state: { cart },
  } = useContext(AppContext);
  const createOrder = async (e: any) => {
    e.preventDefault();
    closeModal();
    closeConfirmPayment();
    // try {
    //   const data = {
    //     restaurant_id: user.works_at,
    //     username: user.username,
    //     order_items: cart,
    //   };
    //   const response = await PosService.placeOrder(data);
    //   console.log("ordersent", response);
    //   closeModal();
    //   closeConfirmPayment();
    // } catch (error) {
    //   console.log(error, "caught err");
    // }
  };

  const disabled = total !== Number(amtPaid);
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
          <h4>₦{total}</h4>
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

      <form className="payment__bottom" onSubmit={createOrder}>
        <div className="payment__bottom--input">
          <h3>enter amount received:</h3>
          <input
            type="number"
            className="input__ordinary"
            value={amtPaid}
            onChange={(e) => setAmtPaid(e.target.value)}
          />
        </div>

        <div className="payment__bottom--btns">
          <span onClick={closeModal}>cancel</span>
          {disabled ? (
            <button className="button__element disabled">
              confirm payment
            </button>
          ) : (
            <Button text="confirm payment" />
          )}
        </div>
      </form>
    </section>
  );
}
