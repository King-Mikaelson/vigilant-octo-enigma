import {GrFormClose} from "react-icons/gr"


type Props ={
setOpenWhatsapp:React.Dispatch<React.SetStateAction<boolean>>,
  handleModalClose:() => void,
  handleModalOpen:() => void,
  setSuccessText:React.Dispatch<React.SetStateAction<string>>



}

const WhatsappModal = ({setOpenWhatsapp,handleModalClose,handleModalOpen, setSuccessText}:Props) => {

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessText("Report has been sent via Whatsapp susccesssfully");
    handleModalOpen();
    setOpenWhatsapp(false)
    const form = event.currentTarget;
    form.reset();
  };

  return (
    <div className="item-pry-container1">
      <div className="container-item">
        <div className="header">
          <h2>Share via Whatsapp</h2>
          <GrFormClose size={30} className="icon" />
        </div>
        <hr />
        <form onSubmit={handleFormSubmit}>
          <div className="form-field">
            <label htmlFor="itemName">Receiver’s Whatsapp Number</label>
            <input
              type="text"
              id="itemName"
              placeholder="whatsappnumber"
              required
            />
          </div>
          <div className="flex buttons">
            <button className="add-btn" type="submit" onClick={() => {setOpenWhatsapp((prevValue) => !prevValue)}}>
             Go Back
            </button>
            <button className="cancel-btn">
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WhatsappModal;
