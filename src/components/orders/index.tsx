import Payment from "../modals/Payment";
import Button from "../ui/button";
import { AiOutlineDelete } from "react-icons/ai";

export default function Orders() {
  const itemName1 = "Salted Pasta with mushroom sauce";

  function truncate(str: string, max: number) {
    return str.length > max ? str.substr(0, max - 1) + "…" : str;
  }
  return (
    <section className="orders">
      <Payment />
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
          {/* <aside className="top__empty">No Orders yet.</aside> */}
          <aside className="top__cartDetails">
            <div className="cartItem">
              <h3>
                {truncate(itemName1, 16)} <br />
                <small> ₦6,000</small>
              </h3>
              <span>
                <button className="btn__cart">-</button>
                <h1>2</h1>
                <button className="btn__cart">+</button>
              </span>
              <h1>
                ₦12,000
                <AiOutlineDelete
                  color="#D31717"
                  size={25}
                  className="delIcon"
                />
              </h1>
            </div>
          </aside>
        </section>
        <section className="bottom">
          <aside className="bottom__invoice">
            <div className="calc">
              <span>Subtotal</span>
              <h3>₦0</h3>
            </div>
            <div className="calc">
              <span>Discount</span>
              <h3>₦0</h3>
            </div>
            <div className="calc">
              <span>Grand total</span>
              <h3>₦0</h3>
            </div>
            <Button text="continue to payment" />
          </aside>
        </section>
      </section>
    </section>
  );
}
