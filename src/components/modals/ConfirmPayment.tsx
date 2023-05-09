import { HiCheckCircle } from "react-icons/hi";
import Button from "../ui/button";
import { useState, Dispatch, SetStateAction } from "react";
import Company from "../waiters/company";
import ReceiptOrders from "../waiters/receipt-orders";

interface ModalClose {
  closeConfirmPayment?: () => void;
  setMode?: Dispatch<SetStateAction<string>>;
}
export default function ConfirmPayment({ closeConfirmPayment }: ModalClose) {
  const [mode, setMode] = useState<string>("default");
  console.log(mode);
  return (
    <>
      {mode === "default" && (
        <Confirm closeConfirmPayment={closeConfirmPayment} setMode={setMode} />
      )}
      {mode === "receipt" && <Receipt setMode={setMode} />}
      {mode === "email" && <Email setMode={setMode} />}
      {mode === "whatsapp" && <Whatsapp setMode={setMode} />}
    </>
  );
}

//DEFAULT MODAL
const Confirm = ({ closeConfirmPayment, setMode }: ModalClose) => {
  return (
    <div className="modal__center">
      <HiCheckCircle size={100} color="#00C650" />
      <h1>Payment Method Confirmed</h1>
      <Button text="print receipt" onclick={() => setMode?.("receipt")} />
      <Button
        text="Send Receipt via Email"
        onclick={() => setMode?.("email")}
      />
      <Button
        text="Send Receipt via Whatsapp"
        onclick={() => setMode?.("whatsapp")}
      />
      <Button text="go back" onclick={closeConfirmPayment} />
    </div>
  );
};

//RECEIPT MODAL
const Receipt = ({ setMode }: ModalClose) => {
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

      <div>
        <Button text="go back" onclick={() => setMode?.("default")} />
        <Button text="print" />
      </div>
    </div>
  );
};

//EMAIL MODAL
const Email = ({ setMode }: ModalClose) => {
  return (
    <div className="modal__center share">
      <aside className="share__top">
        <h5>Share via Email </h5>
        <span>x</span>
      </aside>

      <aside className="share__mid">
        <h6>Receiver’s Email address</h6>
        <input
          type="email"
          className="input__ordinary"
          placeholder="receivername@email.com"
        />
      </aside>

      <aside className="share__btm">
        <Button text="go back" onclick={() => setMode?.("default")} />
        <Button text="share" />
      </aside>
    </div>
  );
};

//WHATSAPP MODAL
const Whatsapp = ({ setMode }: ModalClose) => {
  return (
    <div className="modal__center share">
      <aside className="share__top">
        <h5>Share via Whatsapp </h5>
        <span>x</span>
      </aside>

      <aside className="share__mid">
        <h6>Receiver’s Email address</h6>
        <input
          type="number"
          className="input__ordinary"
          placeholder="whatsappnumber"
        />
      </aside>

      <aside className="share__btm">
        <Button text="go back" onclick={() => setMode?.("default")} />
        <Button text="share" />
      </aside>
    </div>
  );
};
