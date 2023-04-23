import { HiCheckCircle } from "react-icons/hi";
import Button from "../ui/button";
import { useState } from "react";
import Company from "../waiters/company";
import ReceiptOrders from "../waiters/receipt-orders";

interface ModalClose {
  closeConfirmPayment?: () => void;
  handlePrintMode?: () => void;
}
export default function ConfirmPayment({ closeConfirmPayment }: ModalClose) {
  const [printMode, setPrintMode] = useState(false);
  const handlePrintMode = () => {
    setPrintMode(true);
  };
  return (
    <>
      {!printMode && (
        <Confirm
          closeConfirmPayment={closeConfirmPayment}
          handlePrintMode={handlePrintMode}
        />
      )}
      {printMode && <Receipt />}
    </>
  );
}

const Confirm = ({ closeConfirmPayment, handlePrintMode }: ModalClose) => {
  return (
    <div className="modal__center">
      <HiCheckCircle size={100} color="#00C650" />
      <h1>Payment Method Confirmed</h1>
      <Button text="print receipt" onclick={handlePrintMode} />
      <Button text="go back" onclick={closeConfirmPayment} />
    </div>
  );
};

const Receipt = () => {
  const currentDate = new Date();
  const date = `${currentDate.toLocaleString("en-US", {
    weekday: "long",
  })}, ${currentDate.toLocaleString("en-US", {
    month: "long",
  })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  const currentTime = new Date();
  const time = currentTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div className="modal__center" style={{ padding: "2rem" }}>
      <h4>Receipt</h4>
      <Company />
      <aside className="time__date">
        <div>
          <h4>
            waiter's name: <span>Joy</span>
          </h4>

          <h4>
            Date: <span>{date}</span>
          </h4>
        </div>

        <div>
          <h4>
            Time: <span>{time}</span>
          </h4>
        </div>
      </aside>
      <ReceiptOrders />

      <Button text="print" />
    </div>
  );
};
