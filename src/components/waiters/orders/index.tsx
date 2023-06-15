import { useState, useContext, useEffect } from "react";
import Payment from "../../modals/Payment";
import Button from "../../ui/button";
import { AiOutlineDelete } from "react-icons/ai";
import ConfirmPayment from "../../modals/ConfirmPayment";
import AppContext from "../../../context/AppContext";
import { CartTypes } from "../../../frontendData/frontendData";

export default function Orders() {
  const [openModal, setOpenModal] = useState(false);
  const [confirmPayment, setConfirmPayment] = useState(false);
  const [total, setTotal] = useState(0);
  const [discount] = useState(0);

  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);
  const handleModalClose = () => {
    setOpenModal(!openModal);
  };
  const handleConfirmModal = () => {
    setConfirmPayment(!confirmPayment);
  };
  useEffect(() => {
    setTotal(
      cart?.reduce(
        (acc: number, curr: CartTypes) =>
          acc + parseFloat(curr?.item_price) * curr?.quantity,
        0
      )
    );
  }, [cart]);
  // const itemName1 = "Salted Pasta with mushroom sauce";

  function truncate(str: string, max: number) {
    return str?.length > max ? str?.substr(0, max - 1) + "…" : str;
  }
  return (
    <section className="orders">
      {openModal && (
        <>
          <div
            className={openModal ? "payment__wrapper" : ""}
            onClick={handleModalClose}
          ></div>
          <Payment
            closeModal={handleModalClose}
            closeConfirmPayment={handleConfirmModal}
            total={total}
          />
        </>
      )}
      {confirmPayment && (
        <>
          <div
            className={confirmPayment ? "modal" : ""}
            onClick={handleConfirmModal}
          ></div>
          <ConfirmPayment closeConfirmPayment={handleConfirmModal} />
        </>
      )}
      {/* FIXED HEADER */}
      <section className="orders__header">
        <aside className="heading">
          <h1>New Order</h1>
          <span>#000001</span>
        </aside>

        <aside className="titles">
          <h2>Items</h2>
          <h2>Qty</h2>
          <h2>Price</h2>
        </aside>
      </section>

      {/* CART SECTION */}
      <section className="orders__cart">
        <section className="top">
          {cart.length === 0 && (
            <aside className="top__empty">No Orders yet.</aside>
          )}
          <aside className="top__cartDetails">
            {cart.length > 0 && (
              <>
                {cart?.map((item: CartTypes, index: string) => (
                  <div className="cartItem" key={index}>
                    <h3>
                      {truncate!(item?.item_name, 16)} <br />
                      <small> ₦{parseInt(item?.item_price)}</small>
                    </h3>
                    <span>
                      <button
                        className="btn__cart"
                        onClick={() => {
                          dispatch!({
                            type: "DECREMENT_QTY",
                            payload: item,
                          });
                        }}
                      >
                        -
                      </button>
                      <h1>{item?.quantity}</h1>
                      <button
                        className="btn__cart"
                        onClick={() => {
                          dispatch!({
                            type: "INCREMENT_QTY",
                            payload: item,
                          });
                        }}
                      >
                        +
                      </button>
                    </span>
                    <h1>
                      ₦{item?.quantity * parseInt(item?.item_price)}
                      <AiOutlineDelete
                        color="#D31717"
                        size={25}
                        className="delIcon"
                        onClick={() => {
                          dispatch!({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          });
                        }}
                      />
                    </h1>
                  </div>
                ))}
              </>
            )}
          </aside>
        </section>
        <section className="bottom">
          <aside className="bottom__invoice">
            <div className="calc">
              <span>Subtotal</span>
              <h3>₦{Number(total)}</h3>
            </div>
            <div className="calc">
              <span>Discount</span>
              <h3>₦{discount}</h3>
            </div>
            <div className="calc">
              <span>Grand total</span>
              <h3>₦{total - discount}</h3>
            </div>
            <Button text="continue to payment" onclick={handleModalClose} />
          </aside>
        </section>
      </section>
    </section>
  );
}
