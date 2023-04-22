import { MdOutlineCancel } from "react-icons/md";

type Props ={
  setOpenDelete?:React.Dispatch<React.SetStateAction<boolean>>
}
const DeleteItem = ({setOpenDelete}:Props) => {
  const handleModalClose = () => {};

  return (
    <div className="del-container">
      <div className="del-content">
        <span className="close-btn" onClick={ () => {handleModalClose(); setOpenDelete?.((prevValue) => !prevValue) }}>
          <MdOutlineCancel />
        </span>
        <p>Delete Item?</p>

        <div className="buttons">
          <button className="del-btn" type="submit">
            Delete
          </button>
          <button onClick={() => {setOpenDelete?.((prevValue) => !prevValue)}} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItem;
