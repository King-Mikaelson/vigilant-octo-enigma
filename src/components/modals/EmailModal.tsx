import {GrFormClose} from "react-icons/gr"

type Props ={
  setOpenEmail?:React.Dispatch<React.SetStateAction<boolean>>,
  handleModalClose:() => void,
  handleModalOpen:() => void,
  setSuccessText:React.Dispatch<React.SetStateAction<string>>


}

const EmailModal = ({setOpenEmail,handleModalClose,handleModalOpen,setSuccessText }:Props) => {

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessText("Report has been sent via email susccesssfully");
    handleModalOpen();
    setOpenEmail?.((prevValue) => !prevValue)
    const form = event.currentTarget;
    form.reset();
  };

  return (
    <div className="item-pry-container1">
      <div className="container-item">
        <div className="header">
          <h2>Share via Email</h2>
          <GrFormClose className="icon" size={30} />
        </div>
        <hr />
        <form onSubmit={handleFormSubmit}>
          <div className="form-field">
            <label htmlFor="itemName">Receiver’s Email address</label>
            <input
              type="text"
              id="itemName"
              placeholder="receivername@email.com"
              required
            />
          </div>
          <div className="flex buttons">
            <button className="add-btn" type="submit" onClick={() => {setOpenEmail?.((prevValue) => !prevValue)}}>
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

export default EmailModal;
