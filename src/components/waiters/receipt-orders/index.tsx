export default function ReceiptOrders() {
  const itemName1 = "Salted Pasta with mushroom sauce";

  function truncate(str: string, max: number) {
    return str.length > max ? str.substr(0, max - 1) + "…" : str;
  }
  return (
    <section className="receiptOrders__wrapper">
      <aside className="titles">
        <h2>Items</h2>
        <h2>Qty</h2>
        <h2>Price</h2>
      </aside>

      <section className="orderSection">
        <div className="orderItem">
          <h3>
            {truncate(itemName1, 16)} <br />
            <small> ₦6,000</small>
          </h3>
          <h4>2</h4>
          <h4>₦12,000</h4>
        </div>

        <div className="orderItem">
          <h3>
            {truncate(itemName1, 16)} <br />
            <small> ₦6,000</small>
          </h3>
          <h4>2</h4>
          <h4>₦12,000</h4>
        </div>
        <div className="orderItem">
          <h3>
            {truncate(itemName1, 16)} <br />
            <small> ₦6,000</small>
          </h3>
          <h4>2</h4>
          <h4>₦12,000</h4>
        </div>

        <div className="orderItem">
          <h3>
            <small> Grand Total</small>
          </h3>
          <h4>₦12,000</h4>
        </div>
      </section>
    </section>
  );
}
